const { tableColumns } = require('./tableColumns');
const { stag_odk_delivery_infant_info } = require("../../models")
const odkCentral = require('../get-ptracker-data.js');


async function getDeliveryInfantInfoSubmissionData() {
    return new Promise(async(resolve, reject) => {
        return await odkCentral.updateReviewStateFromOdkCentralAndInsertToMysql(stag_odk_delivery_infant_info, tableColumns)
            .then(async(result) => {
                return resolve(result);
            })
            .catch(err => {
                return reject(err);
            })
    })
}
module.exports = { getDeliveryInfantInfoSubmissionData }