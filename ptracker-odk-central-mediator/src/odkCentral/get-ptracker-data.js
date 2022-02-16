const { OdkCentral } = require("./odk-central-api");
const odkCentral = new OdkCentral();
const flatten = require('flat');

function retrieveClientSubmissionDataFromOdkCentral(tableColumns) {
    return new Promise((resolve, reject) => {
        odkCentral.getClientSubmissionDataFromOdkCentral()
            .then(async(res) => {
                try {
                    let result = JSON.parse(res.body);
                    if (res.response.statusCode == 200) {
                        console.log(`Retrived '${result.value.length}' submissions record from ODK Central  ✅\n`);
                        let cleanedRecords = await loopThroughDataFromOdkCentral(result, tableColumns);
                        return resolve(cleanedRecords);
                    } else {
                        return reject(`Error while retrieving Data from ODK Central 🚫`);
                    }
                } catch (error) {
                    return reject(`Error while retrieving Data from ODK Central: ${error} 🚫\n`)
                }
            })
            .catch(err => console.error(err));
    });
}

//data mapping
function loopThroughDataFromOdkCentral(records, tableColumns) {
    return records.value.map(function(record) {
        let parsedRecord = {};
        let recordtmp = flatten(record);
        Object.keys(tableColumns).map(key => {
            parsedRecord[key] = recordtmp[tableColumns[key]];
        });
        return parsedRecord;
    });
}

//change review state
async function updateReviewStateFromOdkCentralAndInsertToMysql(model, tableColumns) {
    return new Promise(async(resolve, reject) => {
        return await retrieveClientSubmissionDataFromOdkCentral(tableColumns)
            .then(async(results) => {
                await getSubmissionsreviewState(results, reviewState)
                    .then(async() => {
                        await updateOrCreate(model, results)
                            .then(res => { return resolve(res) })
                    }).catch(async() => {
                        await updateOrCreate(model, results)
                            .then(res => { return resolve(res) })
                    })
            }).catch((err) => {
                return reject(err)
            });
    }).catch(err => console.error(err));
}

async function getSubmissionsreviewState(results, state) {
    return new Promise((resolve, reject) => {
        results.forEach(async(value) => {
            if (value.review_state != state || value.review_state == null) {
                console.log(`REVIEW State for: ${value.submission_uuid}  NEEDS to be updated\n`);
                await updateReviewStateToOdkCentral(results, state)
                    .then(async() => {
                        console.log(`REVIEW State for: '${value.submission_uuid}'  UPDATED\n`)
                    })
                    .catch(err => console.log(`Error updating review state for: '${value.submission_uuid}' 🚫:\n`, err))
                return resolve(value);
            } else {
                console.log(`REVIEW state for '${value.submission_uuid}' ALREADY updated !\n`);
                return reject(value);
            }
        })
    });
}

//update review state
async function updateReviewStateToOdkCentral(records, state) {
    return new Promise((resolve, reject) => {
        records.forEach(async(record) => {
            odkCentral.updateSubmissionReviewState(record.submission_uuid, state)
                .then(response => {
                    if (response.response.statusCode == 200) {
                        return resolve(response);
                    } else {
                        return reject(`Error updating review state for '${record.submission_uuid}' ! 🚫\n`);
                    }
                }).catch(err => {
                    return reject(`Could not review state. \nError: ${err}🚫`);
                })
        });
    });
};

//get submission uuid
async function getSubmissionUuid(record) {
    return new Promise((resolve, reject) => {
        if (record) {
            var vals = [];
            record.forEach(uuid => {
                vals.push(uuid.submission_uuid);
            });
            return resolve(vals);
        } else { return reject(`No record to extract submission_uuid 🚫\n`); }
    });
}

// upsert record into MYSQL
async function updateOrCreate(model, newItem) {
    let submission_uuid = await getSubmissionUuid(newItem);
    return model
        .findOne({ where: { submission_uuid: submission_uuid } })
        .then(function(foundItem) {
            if (!foundItem) {
                // Item not found, create a new one
                return model
                    .bulkCreate(newItem)
                    .then(function(item) { return { item: item, created: true }; })
            }
            // Found an item, update it
            return model
                .update(newItem, { where: { submission_uuid: submission_uuid } })
                .then(function(item) { return { item: item, created: false } });
        }).catch(err => console.error(err));
}

// upsert record review state into MYSQL
async function updateOrCreatereviewState(model, newItem) {
    let submission_uuid = await getSubmissionUuid(newItem);
    return model
        .findAll({ where: { submission_uuid: submission_uuid } })
        .then(function() {
            return model
                .update({ review_state: 'received' }, { where: { submission_uuid: submission_uuid } })
                .then(function(item) { return { item: item, created: false } });
        })
}

module.exports = {
    retrieveClientSubmissionDataFromOdkCentral,
    loopThroughDataFromOdkCentral,
    updateReviewStateFromOdkCentralAndInsertToMysql,
    updateReviewStateToOdkCentral,
    updateOrCreate
};