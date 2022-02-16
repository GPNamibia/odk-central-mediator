const { tableColumns } = require('./tableColumns');
const { stag_odk_pnc_infant } = require("../../models")
const odkCentral = require('../get-ptracker-data.js');


async function getPncInfantSubmissionData() {
    return new Promise(async(resolve, reject) => {
        return await odkCentral.updateReviewStateFromOdkCentralAndInsertToMysql(stag_odk_pnc_infant, tableColumns)
            .then(async(result) => {
                return resolve(result);
            })
            .catch(err => {
                return reject(err);
            })
    })
}
module.exports = { getPncInfantSubmissionData }