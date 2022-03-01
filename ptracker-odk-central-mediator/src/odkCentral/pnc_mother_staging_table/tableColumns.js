const tableColumns = {
    submission_uuid: '__id',
    ptracker_id: 'ptracker_id',
    facility_code: 'facility',
    facility_name: 'facility_name',
    type: 'visit_type',
    visit_date: 'visit_date',
    visit_date_recorded_odk: 'visit_date',
    openmrs_person: 'mrs_person_uuid',
    openmrs_patient: 'mrs_patient_uuid',
    facility_uuid: 'facility_uuid',
    given: 'client_info.name.given',
    middle: 'client_info.name.middle',
    family: 'client_info.name.family',
    sex: 'client_info.name.sex',
    dob: 'client_info.dob.dateof',
    age: 'client_info.dob.yearof',
    country: 'client_info.client_contact.country',
    country_other: 'client_info.client_contact.country_other',
    district: 'client_info.client_contact.client_contact_district',
    address: 'client_info.client_contact.grpaddress.address',
    location: 'client_info.client_contact.grplocation.location',
    phone_number: 'client_info.client_contact.grpphone.phone_number',
    kin_name: 'client_info.client_contact.grpkinname.kin_name',
    kin_contact: 'client_info.client_contact.grpkincontact.kin_contact',
    // PNC PART
    next_pnc_visit_date: 'pnc3.grpvisitdatepnc.next_pnc_visit_date',
    next_pnc_visit_facility: 'pnc3.next_pnc_visit_facility',
    next_pnc_visit_facility_transfered: 'pnc3.next_pnc_visit_facility_transfered',
    next_facility_to_visit_transfered_date: '',
    next_pnc_visit_facility_transfered_other: 'pnc3.next_pnc_visit_facility_transfered_other',
    //HIV STATUS PART
    hiv_test_status: 'hivstatus.hiv_test_status',
    hiv_test_result: 'hivstatus.hiv_test_result',
    art_int_status: 'hivstatus.art_int_status',
    anc_art_initation: 'hivstatus.anc_art_initation',
    art_int_status_refused_reason: 'hivstatus.grp_refused_art.art_int_status_refused_reason',
    art_int_status_refused_reason_missing: 'hivstatus.grp_refused_art.art_int_status_refused_reason_missing',
    art_number: 'hivstatus.grp_art.art_number',
    art_number_missing: 'hivstatus.grp_art.art_number_missing',
    art_start_date: 'hivstatus.grp_artstartdate.art_start_date',
    art_start_date_missing: 'hivstatus.grp_artstartdate.art_start_date_missing',
    vl_test_done: 'hivstatus.vl_test_done',
    vl_test_date: 'hivstatus.viral_load.grp_vl.vl_test_date',
    vl_test_date_missing: 'hivstatus.viral_load.grp_vl.vl_test_date_missing',
    vl_test_result: 'hivstatus.viral_load.vl_test_result',
    vl_test_result_value: 'hivstatus.grpvlresult.vl_test_result_value',
    vl_test_result_value_missing: 'hivstatus.grpvlresult.vl_test_result_value_missing',
    // MISC
    provider_uuid: 'mrs_openmrs_user_uuid',
    username: 'ptracker_username',
    submission_date: 'form_date_time',
    review_state: '__system.reviewState'
}

const visit_type = '3';
const table_name = 'PNC MOTHER';

module.exports = {
    tableColumns,
    visit_type,
    table_name
}