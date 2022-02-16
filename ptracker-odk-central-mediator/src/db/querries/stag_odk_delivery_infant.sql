--CREATING ANC STAGING TABLE--
DROP TABLE IF EXISTS `stag_odk_anc`;

CREATE TABLE stag_odk_delivery_infant(
  `submission_uuid` varchar(255)  NOT NULL PRIMARY KEY,
  `ptracker_id` varchar(255)  NULL,
  `facility_code` varchar(255)  NULL,
  `facility_name` varchar(255)  NULL,
  `type` varchar(3) NOT NULL  ,
  `visit_date` varchar(19)  NULL,
  `visit_date_recorded_odk` varchar(19) DEFAULT NULL,
  `openmrs_id` binary(0)  NULL,
  `openmrs_person_uuid` varchar(255)  NULL,
  `openmrs_patient_uuid` varchar(255)  NULL,
  `facility_uuid` varchar(255)  NULL,
  `odk_uuid` varchar(80) NOT NULL  ,
  `given` varchar(255)  NULL,
  `middle` varchar(255)  NULL,
  `family` varchar(255)  NULL,
  `sex` varchar(255)  NULL,
  `dob` varchar(19)  NULL,
  `age` int(11)  NULL,
  `country` varchar(255)  NULL,
  `country_other` varchar(255)  NULL,
  `district` varchar(255)  NULL,
  `address` varchar(255)  NULL,
  `location` varchar(255)  NULL,
  `phone_number` varchar(255)  NULL,
  `kin_name` varchar(255)  NULL,
  `kin_contact` varchar(255)  NULL,
  -- MISC --
  `provider_uuid` varchar(255)  NULL,
  `username` varchar(255)  NULL,
  `submission_date` varchar(255) NULL
);
