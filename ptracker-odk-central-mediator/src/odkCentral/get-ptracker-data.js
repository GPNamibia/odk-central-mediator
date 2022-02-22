const { OdkCentral } = require("./odk-central-api");
const odkCentral = new OdkCentral();
const flatten = require('flat');
const sqlBuilder = require('../db/sql-builder');


function retrieveSubmissionFromodkCentral(tableColumns, visit_type, table_name) {
    return new Promise((resolve, reject) => {
        odkCentral.getClientSubmissionDataFromOdkCentral()
            .then(async(res) => {
                let result = JSON.parse(res.body);
                if (res.response.statusCode == 200) {
                    let cleanedRecords = await loopAndMapThroughDataFromOdkCentral(result, tableColumns);
                    let filteredRecords = cleanedRecords.filter(function(records) { return records.type == visit_type });
                    console.log(`Retrieving '【${filteredRecords.length}】' 【${table_name}】 submissions record from ODK Central  ✅\n`);
                    return resolve(filteredRecords);
                } else {
                    return reject(`Error while retrieving Data from ODK Central 🚫`);
                }
            })
            .catch(err => {
                console.error(`Error: ${err} \n`);
                return reject(`Error while retrieving Data from ODK Central: ${err} 🚫\n`)
            });
    });
}

function retrieveSubmissionFromOdkCentralRepeatGroups(submission_uuid, tableColumns, table_name) {
    return new Promise((resolve, reject) => {
        odkCentral.getClientSubmissionDataFromOdkCentralForRepeatGroups(submission_uuid)
            .then(async(res) => {
                let result = JSON.parse(res.body);
                if (res.response.statusCode == 200) {
                    let cleanedRecords = await loopAndMapThroughDataFromOdkCentral(result, tableColumns);
                    console.log(`Retrieving '【${cleanedRecords.length}】'【${table_name}】  submissions record from ODK Central  ✅\n`);
                    return resolve(cleanedRecords);
                } else {
                    return reject(`Error while retrieving repeat group Data from ODK Central 🚫\n`);
                }
            })
            .catch(err => {
                console.error(`Error: ${err} \n`);
                return reject(`Error while retrieving repeat group Data from ODK Central: ${err} 🚫\n`)
            });
    });
}


async function getDataFromOdkCentralForRepeatGroup(model, tableColumns, visit_type, table_name) {
    return new Promise(async(resolve, reject) => {
        let records = await retrieveSubmissionFromodkCentral(tableColumns, visit_type, table_name)
        if (records.length > 0) {
            try {
                records.forEach(async(results) => {
                    await retrieveSubmissionFromOdkCentralRepeatGroups(results.submission_uuid, tableColumns, table_name)
                        .then(async(response) => {
                            response.forEach(async(res) => {
                                await sqlBuilder.upsertRepeatGroupRecordToMysql(model, res, results.ptracker_id)
                                await sqlBuilder.upsertRepeatGroupMaintableRecordToMysql(model, results, results.submission_uuid)
                                return resolve(response);
                            });
                        }).catch(err => console.error(err));
                });
            } catch (error) {
                console.error(`Error while retrieving Data from ODK Central: ${error} 🚫\n`)
            }
        } else {
            return reject(`No records retrieved for 【${table_name}】 \n`)
        }
    })
}

//data mapping
function loopAndMapThroughDataFromOdkCentral(records, tableColumns) {
    return records.value.map(function(record) {
        let parsedRecord = {};
        let recordtmp = flatten(record);
        Object.keys(tableColumns).map(key => {
            parsedRecord[key] = recordtmp[tableColumns[key]];
        });
        return parsedRecord;
    });
}


// get submission review state and update to ODK Central
async function updateReviewStateFromOdkCentralAndInsertToMysql(model, tableColumns, visit_type, table_name) {
    try {
        let results = await retrieveSubmissionFromodkCentral(tableColumns, visit_type, table_name)
        results.forEach(async(value) => {
            if (value.review_state != reviewState) {
                console.log(`REVIEW State for: ${value.submission_uuid}  NEEDS to be updated\n`);
                await updateReviewStateToOdkCentral(value, reviewState);
                return await upsertRecordsToMYSQL(value, model, table_name);
            } else {
                console.log(`REVIEW state for '${value.submission_uuid}' ALREADY updated !\n`);
                return await upsertRecordsToMYSQL(value, model, table_name)
            }
        })
    } catch (error) {
        console.error(`Error while updating records: ${error} :🚫:\n`);
    }
}

//upsert approved submissions
async function upsertRecordsToMYSQL(results, model, table_name) {
    return new Promise(async(resolve, reject) => {
        if (results) {
            await sqlBuilder.upsertRecordToMysql(model, results, results.submission_uuid)
                .then(async(res) => {
                    console.log(`Succesfully  ✅ UPSERTED records for:'${results.submission_uuid}' in 【${table_name}】 table.\n`)
                    return resolve(sqlBuilder.updateReviewStateToMysql(model, results.submission_uuid));
                }).catch(err => { console.log(`Error while upserting record for 【${table_name}】: ${err} :🚫:\n`) });
        } else {
            return reject(`No records retrieved for 【${table_name}】 \n`);
        }
    })
}


//update review state to odk central
async function updateReviewStateToOdkCentral(records, state) {
    return new Promise((resolve, reject) => {
        odkCentral.updateSubmissionReviewState(records.submission_uuid, state)
            .then(response => {
                if (response.response.statusCode == 200) {
                    console.log(`REVIEW State for: '${records.submission_uuid}'  UPDATED\n`)
                    return resolve(response);
                } else {
                    return reject(`Error updating review state for '${records.submission_uuid}' ! 🚫\n`);
                }
            }).catch(err => {
                console.error(`Error: ${err} \n`);
                return reject(`Could not review state.: ${err}🚫 \n`);
            })
    });
};

module.exports = {
    retrieveSubmissionFromodkCentral,
    loopAndMapThroughDataFromOdkCentral,
    updateReviewStateFromOdkCentralAndInsertToMysql,
    updateReviewStateToOdkCentral,
    retrieveSubmissionFromOdkCentralRepeatGroups,
    updateReviewStateFromOdkCentralAndInsertToMysql,
    getDataFromOdkCentralForRepeatGroup
};