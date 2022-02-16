const { tableColumns } = require('./tableColumns');
const { stag_odk_pnc_mother } = require("../../models")
const odkCentral = require('../get-ptracker-data.js');


async function getPncMotherSubmissionData() {
    return new Promise(async(resolve, reject) => {
        return await odkCentral.updateReviewStateFromOdkCentralAndInsertToMysql(stag_odk_pnc_mother, tableColumns)
            .then(async(result) => {
                return resolve(result);
            })
            .catch(err => {
                return reject(err);
            })
    })
}
module.exports = { getPncMotherSubmissionData }