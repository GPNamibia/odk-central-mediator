const tableColumns = {
    submission_uuid: '__id',
    infant_id: '__id',
    Submissions_id: '__Submissions-id',
    ptracker_id: 'ptracker_id',
    facility_code: 'facility',
    facility_name: 'facility_name',
    type: 'visit_type',
    facility_uuid: 'facility_uuid',
    // INFANT L&D PART
    infant_ptracker_id: 'info2.infant_ptracker_number',
    infant_status: 'infant_status',
    infant_sex: 'info.infant_sex',
    infant_dob: 'info.infant_dob',
    infant_stillbirth: 'info.still_birth',
    infant_feeding: 'info.Infant_feeding',
    infant_dod: 'info.infant_dod',
    infant_dod_missing: 'info.infant_dod_missing',
    infant_arv_status: 'info.infant_arv',
    infant_arv_reason_for_refusal: 'info2.infant_arv_reason_for_refusal',
    infant_arv_reason_for_refusal_missing: 'info2.infant_arv_reason_for_refusal_missing',
    // MISC
    provider_uuid: 'mrs_openmrs_user_uuid',
    username: 'ptracker_username',
    submission_date: 'form_date_time',
    review_state: '__system.reviewState'
}

const visit_type = '2';
const table_name = 'DEELIVERY INFANT';

module.exports = {
    tableColumns,
    visit_type,
    table_name,
}