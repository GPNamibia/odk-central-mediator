const tableColumns = {
    submission_uuid: '__id',
    // INFANT L&D PART
    infant_ptracker_id: 'ld.infant.info2.infant_ptracker_number',
    infant_status: 'ld.infant.infant_status',
    infant_sex: 'ld.infant.info.infant_sex',
    infant_dob: 'ld.infant.info.infant_dob',
    infant_stillbirth: 'd.infant.info.still_birth',
    infant_feeding: 'ld.infant.info.Infant_feeding',
    infant_dod: 'ld.infant.info.infant_dod',
    infant_dod_missing: 'ld.infant.info.infant_dod_missing',
    infant_arv_status: 'ld.infant.info.infant_arv',
    infant_arv_reason_for_refusal: 'ld.infant.info2.infant_arv_reason_for_refusal',
    infant_arv_reason_for_refusal_missing: 'ld.infant.info2.infant_arv_reason_for_refusal_missing',
    // MISC
    provider_uuid: 'mrs_openmrs_user_uuid',
    username: 'ptracker_username',
    submission_date: 'form_date_time',
    review_state: '__system.reviewState'
}

module.exports = {
    tableColumns
}