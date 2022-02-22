const { tableColumns, visit_type, table_name } = require('./tableColumns');
const { stag_odk_delivery } = require("../../models")
const odkCentral = require('../get-ptracker-data.js');


async function getDeliverySubmissionData() {
    return new Promise(async(resolve, reject) => {
        return await odkCentral.updateReviewStateFromOdkCentralAndInsertToMysql(stag_odk_delivery, tableColumns, visit_type, table_name)
            .then(async(result) => {
                return resolve(result);
            })
            .catch(err => {
                console.error(`Error: ${err} \n`);
                return reject(err);
            })
    })
}
module.exports = { getDeliverySubmissionData }