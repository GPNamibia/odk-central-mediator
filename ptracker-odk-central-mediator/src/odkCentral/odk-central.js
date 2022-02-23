const stag_odk_anc = require('./anc_staging_table/stag_odk_anc');
const stag_odk_delivery_infant = require('./delivery_infant_staging_table/stag_odk_delivery_infant');
const stag_odk_delivery = require('./delivery_staging_table/stag_odk_delivery');
const stag_odk_pnc_infant = require('./pnc_infant_staging_table/stag_odk_pnc_infant');
const stag_odk_pnc_mother = require('./pnc_mother_staging_table/stag_odk_pnc_mother');


async function getPtrackerdata() {
    return new Promise(async(resolve) => {
        try {
            await stag_odk_anc.getAncSubmissionData()
                .then(async(res) => {
                    return resolve();
                })
                .catch((err) => { console.error(err) })

            await stag_odk_delivery.getDeliverySubmissionData()
                .then(async(res) => {
                    return resolve();
                })
                .catch((err) => { console.error(err) })

            await stag_odk_delivery_infant.getDeliveryInfantSubmissionData()
                .then(async(res) => {
                    return resolve();
                })
                .catch((err) => { console.error(err) })

            await stag_odk_pnc_mother.getPncMotherSubmissionData()
                .then(async(res) => {
                    return resolve();
                })
                .catch((err) => { console.error(err) })

            await stag_odk_pnc_infant.getPncInfantSubmissionData()
                .then(async(res) => {
                    return resolve();
                })
                .catch((err) => { console.error(err) })
        } catch (error) {
            console.log(`Error while retrieving data`, error)
        }
    }).catch(err => console.error(err));
}

module.exports = {
    getPtrackerdata
};