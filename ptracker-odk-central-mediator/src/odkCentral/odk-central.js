const stag_odk_anc = require('./anc_staging_table/stag_odk_anc');
const stag_odk_delivery_infant = require('./delivery_infant_staging_table/stag_odk_delivery_infant');
const stag_odk_delivery_infant_info = require('./delivery_infant_info_staging_table/stag_odk_delivery_infant_info');
const stag_odk_delivery = require('./delivery_staging_table/stag_odk_delivery');
const stag_odk_pnc_infant = require('./pnc_infant_staging_table/stag_odk_pnc_infant');
const stag_odk_pnc_mother = require('./pnc_mother_staging_table/stag_odk_pnc_mother');


async function getPtrackerdata() {
    return new Promise(async(resolve, reject) => {
        await stag_odk_anc.getAncSubmissionData()
            .then(async(res) => {
                console.log(`Succesfully ✅ Retrived ANC Submission Data\n`)
                return resolve(res)
            })
            .catch((err) => { return reject(err) })

        await stag_odk_delivery_infant.getDeliveryInfantSubmissionData()
            .then(async(res) => {
                console.log(`Succesfully ✅ Retrived DELIVERY INFANT Submission Data\n`)
                return resolve(res)
            })
            .catch((err) => { return reject(err) })

        await stag_odk_delivery_infant_info.getDeliveryInfantInfoSubmissionData()
            .then(async(res) => {
                console.log(`Succesfully ✅ Retrived DELIVERY INFANT INFO Submission Data\n`)
                return resolve(res)
            })
            .catch((err) => { return reject(err) })

        await stag_odk_delivery.getDeliverySubmissionData()
            .then(async(res) => {
                console.log(`Succesfully ✅ Retrived DELIVERY Submission Data\n`)
                return resolve(res)
            })
            .catch((err) => { return reject(err) })

        await stag_odk_pnc_infant.getPncInfantSubmissionData()
            .then(async(res) => {
                console.log(`Succesfully ✅ Retrived PNC INFANT Submission Data\n`)
                return resolve(res)
            })
            .catch((err) => { return reject(err) })

        await stag_odk_pnc_mother.getPncMotherSubmissionData()
            .then(async(res) => {
                console.log(`Succesfully ✅ Retrived PNC MOTHER Submission Data\n`)
                return resolve(res)
            })
            .catch((err) => { return reject(err) })
    }).catch(err => console.error(err));
}

module.exports = {
    getPtrackerdata
};