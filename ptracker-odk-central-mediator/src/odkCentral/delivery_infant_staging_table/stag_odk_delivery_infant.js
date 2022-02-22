const { tableColumns, visit_type, table_name } = require('./tableColumns');
const { stag_odk_delivery_infant } = require("../../models")
const { OdkCentral } = require("../odk-central-api");
const odkCentral = new OdkCentral();
const getPtrackerData = require('../get-ptracker-data.js');

async function getDeliveryInfantSubmissionData() {
    return new Promise(async(resolve, reject) => {
        await getPtrackerData.getDataFromOdkCentralForRepeatGroup(stag_odk_delivery_infant, tableColumns, visit_type, table_name)
            .then(async(result) => {
                return resolve(result);
            })
            .catch(err => {
                console.error(`Error: ${err} \n`);
                return reject(err);
            })
    })
}

module.exports = { getDeliveryInfantSubmissionData }