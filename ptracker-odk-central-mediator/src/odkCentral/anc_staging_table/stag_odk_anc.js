const { tableColumns } = require('./tableColumns');
const { stag_odk_anc } = require("../../models")
const odkCentral = require('../get-ptracker-data.js');


async function getAncSubmissionData() {
    return new Promise(async(resolve, reject) => {
        return await odkCentral.updateReviewStateFromOdkCentralAndInsertToMysql(stag_odk_anc, tableColumns)
            .then(async(result) => {
                return resolve(result);
            })
            .catch(err => {
                return reject(err);
            })
    })
}
module.exports = { getAncSubmissionData };