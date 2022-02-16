module.exports = (sequelize, DataTypes) => {
    const stag_odk_delivery_infant = sequelize.define("stag_odk_delivery_infant", {
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
        // INFANT L&D PART 

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

    return stag_odk_delivery_infant;
};