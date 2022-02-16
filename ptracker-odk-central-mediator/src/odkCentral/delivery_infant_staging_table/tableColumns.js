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
    // INFANT L&D PART
    infant_ptracker_id: 'ld.infant.info2.infant_ptracker_number',
    infant_status: 'ld.infant.infant_status',
    infant_sex: 'ld.infant.info.infant_sex',
    infant_dob: 'ld.infant.info.infant_dob',
    infant_stillbirth: 'd.infant.info.still_birth',
    infant_feeding: 'ld.infant.info.Infant_feeding',
    infant_dod: 'ld.infant.info.infant_dod',
    infant_dod_missing: '',
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