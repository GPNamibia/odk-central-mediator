const { tableColumns } = require('./tableColumns');
const { stag_odk_delivery } = require("../../models")
const odkCentral = require('../get-ptracker-data.js');


async function getDeliverySubmissionData() {
    return new Promise(async(resolve, reject) => {
        return await odkCentral.updateReviewStateFromOdkCentralAndInsertToMysql(stag_odk_delivery, tableColumns)
            .then(async(result) => {
                return resolve(result);
            })
            .catch(err => {
                return reject(err);
            })
    })
}
module.exports = { getDeliverySubmissionData }