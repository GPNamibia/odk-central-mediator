module.exports = (sequelize, DataTypes) => {
    const stag_odk_delivery = sequelize.define("stag_odk_delivery", {
        submission_uuid: {
            type: DataTypes.TEXT,
            allowNull: false,
            // primaryKey: true,
            validate: {
                notEmpty: true
            }
        },
        ptracker_id: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        facility_code: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        facility_name: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        visit_date: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        visit_date_recorded_odk: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        openmrs_id: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        openmrs_person_uuid: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        openmrs_patient_uuid: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        facility_uuid: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        odk_uuid: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        given: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        middle: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        family: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        sex: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        dob: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        age: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        country: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        country_other: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        district: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        ptracker_id: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        phone_number: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        kin_name: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        kin_contact: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        // Mother L&D PART
        ld_has_pinkbook: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        ld_motherstatus: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        ld_discharge_date: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        ld_discharge_date_missing: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        ld_numberof_infants: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        provider_uuid: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        ld_motherstatus_transfered: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        ld_motherstatus_transfered_other: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        // HIV STATUS PART
        anc_first_hiv_test_status: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        hiv_test_status: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        hiv_retest_status: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        hiv_test_result: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        art_int_status: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        anc_art_initation: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        art_int_status_refused_reason: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        art_int_status_refused_reason_missing: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        art_number: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        art_number_missing: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        art_start_date: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        vl_test_done: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        vl_test_date: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        vl_test_result: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        vl_test_result_value: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        // MISC
        provider_uuid: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        submission_date: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        review_state: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    });

    return stag_odk_delivery;
};