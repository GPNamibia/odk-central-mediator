const empty_response = {
    results: []
}

const error_response_1 = {
    "error": {
        "message": "Could not find the resource you were looking for.",
        "code": 404.1
    }
}


const submission_uuid = {
    invalid_uuid: "1ba4e754-a377-43f1-aab2-89e3326b0ae3",
    valid_uuid: "edde9a6e-0890-4808-b587-d95987123522",
    no_uuid: ""
}

const review_state = {
    valid_reviewState: "approved",
    invalid_reviewState: "safbjsbf"
}


const response_with_submission_data = [

    {
        "__id": "uuid:c226ff64-ff23-412f-9e2f-5f505d19042c",
        "form_start_time": "2021-12-08T09:51:53.335+02:00",
        "form_end_time": "2021-12-08T09:54:37.197+02:00",
        "form_date_time": "2021-12-08",
        "deviceid": "collect:uxu4TNYcNcI4cbWY",
        "ptracker_username": "jnghaamwa",
        "mrs_ptracker_pin": "1234",
        "mrs_user_fname": "A1f18",
        "mrs_user_lname": "5431E",
        "username_invalid": null,
        "ptracker_pin": 1234,
        "mrs_openmrs_user_uuid": "a2f98a7d-5c70-420d-9d1e-b643f4533f13",
        "facility": 10371,
        "facility_uuid": "hxcCuuBOkC4",
        "facility_name": "Engela Hospital",
        "facility_note_invalid": null,
        "facility_note": "OK",
        "ptracker_id": "10371A190001",
        "is_follow_up_visit": "0",
        "mrs_ptracker": null,
        "mrs_given_name": null,
        "mrs_middle_name": null,
        "mrs_family_name": null,
        "mrs_dob": null,
        "mrs_date_of_last_visit": null,
        "mrs_date_of_last_hivtest": null,
        "mrs_last_facility": null,
        "mrs_hiv_kp": null,
        "mrs_artnumber": null,
        "mrs_visits": null,
        "mrs_anc_visits": null,
        "mrs_pnc_visits": null,
        "mrs_visits_ld": null,
        "mrs_patient_uuid": null,
        "mrs_person_uuid": null,
        "mrs_has_parent": null,
        "patient_verification": null,
        "patient_verification_invalid": null,
        "client_info_needed": "1",
        "patient_verification_notlisted": "OK",
        "visit_type": "1",
        "followup_validation": null,
        "infantvisit_validation": null,
        "visit_date": "2021-12-08",
        "infantname": {
            "new_note": null,
            "new_given": null,
            "new_middle": null,
            "new_family": null
        },
        "client_info": {
            "name": {
                "given": "Col",
                "middle": "Col",
                "family": "Col",
                "sex": "F"
            },
            "dob": {
                "yearof": 22,
                "dateof": null
            },
            "dob_note": null,
            "infantdob": {
                "dob_infant": null
            },
            "age_estimate_years": "18947",
            "age": "18947",
            "birth_date_required": null,
            "birth_date_female": null,
            "male_too_old": null,
            "client_contact": {
                "country": "1",
                "country_other": null,
                "client_contact_district": "4",
                "grplocation": {
                    "location": null,
                    "location_missing": "66"
                },
                "grpaddress": {
                    "address": null,
                    "address_missing": "66"
                },
                "grpphone": {
                    "phone_number": "08125258",
                    "phone_missing": null
                },
                "grpkinname": {
                    "kin_name": null,
                    "kin_name_missing": "66"
                },
                "grpkincontact": {
                    "kin_contact": null,
                    "kin_contact_missing": "66"
                }
            }
        },
        "first_visit": "0",
        "anc": {
            "gravidagrp": {
                "gravida": null,
                "gravida_missing": null
            },
            "paragrp": {
                "para": null,
                "para_missing": null
            },
            "lnmpgrp": {
                "lnmp": null,
                "lnmp_missing": null
            }
        },
        "edd_calculated": null,
        "grpedd": {
            "check_edd_calculated": null
        },
        "edd_manual": null,
        "has_pinkbook": null,
        "pnc": {
            "firstpnc": null,
            "grpfirstpncdate": {
                "firstpnc_date": null,
                "firstpnc_missing": null
            }
        },
        "infantpnc": {
            "has_parent_id": null,
            "id_parent": null,
            "mrs_infant_parent_given_name": null,
            "mrs_infant_parent_middle_name": null,
            "mrs_infant_parent_family_name": null,
            "mrs_infant_parent_dob": null,
            "mrs_parent_uuid": null,
            "confirm_parent": null,
            "pnc_breastfeeding_status": null,
            "hiv_exposure_status": null,
            "arv_prophylaxis_status": null,
            "arv_prophylaxis_adherence": null,
            "ctx_prophylaxis_status": null,
            "ctx_prophylaxis_adherence": null,
            "infant_hiv_tested": null,
            "infant_hiv_test_used": null,
            "infant_hiv_test_result": null,
            "infant_hiv_test_result_pcr": null,
            "infant_hiv_test_conf": null,
            "infant_hiv_test_conf_result": null,
            "infant_art_linked": null,
            "grpinfantart": {
                "infant_art_number": null,
                "infant_art_number_missing": null
            },
            "infant_transfer_status": null,
            "infant_transfer_status_transferedto": null,
            "infant_transfer_status_transferedto_other": null,
            "infant_transferin_from": null,
            "infant_transferin_from_other": null,
            "infant_transferto_artclinic": null,
            "infant_transferto_artclinic_other": null,
            "grpinfanttrnsfartclinicdate": {
                "infant_transferto_artclinic_date": null,
                "infant_transferto_artclinic_date_missing": null
            },
            "grpinfanteventdate": {
                "infant_event_date": null,
                "infant_event_date_missing": null
            },
            "grpinfanttrnsfdate": {
                "infant_transferin_date": null,
                "infant_transferin_date_missing": null
            },
            "grpinfanttrnsfoutdate": {
                "infant_transferout_date": null,
                "infant_transferout_date_missing": null
            },
            "grpinfantnxtvisitdate": {
                "infant_next_visit_date": null,
                "infant_next_visit_date_missing": null
            },
            "grpinfantdeathdate": {
                "infant_date_death": null,
                "infant_date_death_missing": null
            }
        },
        "artintstatus_label1": "Started on ART in ANC current pregnancy",
        "artintstatus_label2": "Already on ART before current pregnancy",
        "hivstatus": {
            "anc_first_hiv_test_status": null,
            "hiv_test_status": "1",
            "hiv_retest_36weeks": null,
            "hiv_test_result": "1",
            "art_int_status": "1",
            "anc_art_initation": null,
            "grp_refused_art": {
                "art_int_status_refused_reason": null,
                "art_int_status_refused_reason_missing": null
            },
            "grp_art": {
                "art_number": null,
                "art_number_missing": "66"
            },
            "grp_artstartdate": {
                "art_start_date": "2021-12-08",
                "art_start_date_missing": null
            },
            "vl_test_done": null,
            "viral_load": {
                "grp_vl": {
                    "vl_test_date": null,
                    "vl_test_date_missing": null
                },
                "vl_test_result": null
            },
            "grpvlresult": {
                "vl_test_result_value": null,
                "vl_test_result_value_missing": null
            },
            "partner_hivtest_done": "1",
            "partnertestdate_": {
                "partner_hivtest_date": "2021-12-08",
                "partner_hivtest_date_missing": null
            },
            "partner_hivtest_result": "1"
        },
        "ld": {
            "motherstatus": null,
            "grpdischargedate": {
                "discharge_date": null,
                "discharge_date_missing": null
            },
            "numberof_infants": null,
            "infant_note": null,
            "infant_count": null
        },
        "anc2": {
            "grpvisitdateanc": {
                "next_visit_date": "2021-12-08",
                "next_visit_date_missing": null
            },
            "next_facility_to_visit": "1",
            "next_facility_to_visit_transfered": null,
            "next_facility_to_visit_transfered_other": null
        },
        "pnc3": {
            "grpvisitdatepnc": {
                "next_pnc_visit_date": null,
                "next_pnc_visit_date_missing": null
            },
            "next_pnc_visit_facility": null,
            "next_pnc_visit_facility_transfered": null,
            "next_pnc_visit_facility_transfered_other": null,
            "grptransferdatepnc": {
                "next_pnc_transfer_date": null,
                "next_pnc_transfer_date_missing": null
            }
        },
        "ld2": {
            "motherstatus_transfered": null,
            "motherstatus_transfered_other": null
        },
        "checkifblank_username": null,
        "checkifblank_ptrackerid": null,
        "checkifblank_facility": null,
        "meta": {
            "instanceID": "uuid:c226ff64-ff23-412f-9e2f-5f505d19042c",
            "instanceName": "PTK_10371A190001"
        },
        "__system": {
            "submissionDate": "2021-12-08T07:54:39.855Z",
            "updatedAt": "2022-02-21T13:17:15.537Z",
            "submitterId": "18",
            "submitterName": "collin.nehemia@ucglobalprograms.org",
            "attachmentsPresent": 0,
            "attachmentsExpected": 0,
            "status": null,
            "reviewState": "approved",
            "deviceId": "collect:uxu4TNYcNcI4cbWY",
            "edits": 0
        }
    },
]

const response_with_repeat_group_submission_data = [{
        "infant_status": "1",
        "info": {
            "infant_sex": "F",
            "infant_dob": "2022-02-14",
            "still_birth": null,
            "Infant_feeding": "2",
            "infant_dod": null,
            "infant_dod_missing": null,
            "infant_arv": "1"
        },
        "info2": {
            "infant_arv_reason_for_refusal": null,
            "infant_arv_reason_for_refusal_missing": null,
            "infant_ptracker_number": "10371P1600034"
        },
        "infant_more_note": "OK",
        "__id": "b4c132698a73a92e94df83b6147493b80703a6b5",
        "__Submissions-id": "uuid:e276ce03-6c57-439a-bbac-e3b9dd77b5b5"
    },
    {
        "infant_status": "1",
        "info": {
            "infant_sex": "M",
            "infant_dob": "2022-02-14",
            "still_birth": null,
            "Infant_feeding": "1",
            "infant_dod": null,
            "infant_dod_missing": null,
            "infant_arv": "2"
        },
        "info2": {
            "infant_arv_reason_for_refusal": "Doesn't need",
            "infant_arv_reason_for_refusal_missing": null,
            "infant_ptracker_number": "10371P1600033"
        },
        "infant_more_note": "OK",
        "__id": "0326468fdec705afcd38d6ea9c596b9953a3790e",
        "__Submissions-id": "uuid:e276ce03-6c57-439a-bbac-e3b9dd77b5b5"
    },
    {
        "infant_status": "1",
        "info": {
            "infant_sex": "M",
            "infant_dob": "2022-02-14",
            "still_birth": null,
            "Infant_feeding": "1",
            "infant_dod": null,
            "infant_dod_missing": null,
            "infant_arv": "3"
        },
        "info2": {
            "infant_arv_reason_for_refusal": null,
            "infant_arv_reason_for_refusal_missing": null,
            "infant_ptracker_number": "10371P1600032"
        },
        "infant_more_note": "OK",
        "__id": "a9402aab67f4928866485ebbaddbb731b234ec30",
        "__Submissions-id": "uuid:e276ce03-6c57-439a-bbac-e3b9dd77b5b5"
    }
]


const response_after_updating_review_state = [{

    "instanceId": "uuid:e276ce03-6c57-439a-bbac-e3b9dd77b5b5",
    "submitterId": 18,
    "deviceId": "collect:cDqbxbNB60EoTeDt",
    "createdAt": "2022-02-14T12:13:28.663Z",
    "updatedAt": "2022-02-21T17:59:19.870Z",
    "reviewState": "rejected"

}]


module.exports = {
    response_after_updating_review_state,
    response_with_repeat_group_submission_data,
    response_with_submission_data,
    empty_response,
    error_response_1,
    submission_uuid,
    review_state

}