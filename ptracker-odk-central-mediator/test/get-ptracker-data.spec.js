const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { OdkCentral } = require("../src/odkCentral/odk-central-api");
const odkCentral = new OdkCentral();
var fs = require('fs');
const sinon = require('sinon');
const expect = chai.expect;
const {
    stag_odk_anc
} = require("../src/models");
const ptrackerData = require('../src/odkCentral/get-ptracker-data');
const {
    tableColumns,
    visit_type,
    table_name,
    newItem,
    submission_uuid,
    ptracker_id
} = require('./dummy-data/get-ptracker-data');
const {
    response_after_updating_review_state,
    response_with_repeat_group_submission_data,
    response_with_submission_data,
    empty_response,
    error_response_1,
    review_state
} = require('./dummy-data/api-data');



describe(`Get PTracker Data Function: retrieveSubmissionFromodkCentral()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore()
    });

    it(`should return a success message of the retrieved records from ODK Central  when all the required parameters are provided`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'getClientSubmissionDataFromOdkCentral')
            .resolves({
                body: JSON.stringify(response_with_submission_data),
                response: {
                    statusCode: 200
                }
            })
        ptrackerData.retrieveSubmissionFromodkCentral(
                tableColumns, visit_type, table_name)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                expect(result).to.be.equal('Retrieving submissions record from ODK Central');
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'getClientSubmissionDataFromOdkCentral')
            .resolves({})
        ptrackerData.retrieveSubmissionFromodkCentral(
                tableColumns)
            .catch(error => {
                expect(error).to.be.equal('- Error while retrieving Data from ODK Central:.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, (

    ) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'getClientSubmissionDataFromOdkCentral')
            .resolves({})
        ptrackerData.retrieveSubmissionFromodkCentral()
            .catch(error => {
                expect(error).to.be.equal('- Cannot retrieve submission records without tableColumns, visit_type, table_name.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});



describe(`Get PTracker Data Function: retrieveSubmissionFromOdkCentralRepeatGroups()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore()
    });

    it(`should return a success message of the retrieved records from ODK Central for repeat groups  when all the required parameters are provided`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'getClientSubmissionDataFromOdkCentralForRepeatGroups')
            .resolves({
                body: JSON.stringify(response_with_repeat_group_submission_data),
                response: {
                    statusCode: 200
                }
            })
        ptrackerData.retrieveSubmissionFromOdkCentralRepeatGroups(
                submission_uuid.uuid, tableColumns, table_name)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                expect(result).to.be.equal('Retrieving submissions record from ODK Central');
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'getClientSubmissionDataFromOdkCentralForRepeatGroups')
            .resolves({})
        ptrackerData.retrieveSubmissionFromOdkCentralRepeatGroups(
                tableColumns)
            .catch(error => {
                expect(error).to.be.equal('- Error while retrieving Data from ODK Central:.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, (

    ) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'getClientSubmissionDataFromOdkCentralForRepeatGroups')
            .resolves({})
        ptrackerData.retrieveSubmissionFromOdkCentralRepeatGroups()
            .catch(error => {
                expect(error).to.be.equal('- Cannot retrieve submission records without tableColumns, visit_type, table_name.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});


describe(`Get PTracker Data Function: getDataFromOdkCentralForRepeatGroup()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore()
    });

    it(`should return a success message of the retrieved records from ODK Central for repeat groups when all the required parameters are provided`, () => {
        const getStub = sandbox.stub(ptrackerData, 'getDataFromOdkCentralForRepeatGroup')
            .resolves({
                body: JSON.stringify(response_with_repeat_group_submission_data),
                response: {
                    statusCode: 200
                }
            })
        ptrackerData.getDataFromOdkCentralForRepeatGroup(
                stag_odk_anc, tableColumns, visit_type, table_name)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                expect(result).to.be.equal('Retrieving submissions record from ODK Central');
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(ptrackerData, 'getDataFromOdkCentralForRepeatGroup')
            .resolves({})
        ptrackerData.getDataFromOdkCentralForRepeatGroup(
                stag_odk_anc, tableColumns)
            .catch(error => {
                expect(error).to.be.equal('- Error while retrieving Data from ODK Central:.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(ptrackerData, 'getDataFromOdkCentralForRepeatGroup')
            .resolves({})
        ptrackerData.getDataFromOdkCentralForRepeatGroup()
            .catch(error => {
                expect(error).to.be.equal('- `No records retrieved for.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});


describe(`Get PTracker Data Function: loopAndMapThroughDataFromOdkCentral()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore()
    });

    it(`should return mapped records from ODK Central when all the required parameters are provided`, () => {
        const getStub = sandbox.stub(ptrackerData, 'loopAndMapThroughDataFromOdkCentral')
            .resolves({
                body: JSON.stringify(response_with_submission_data),
                response: {
                    statusCode: 200
                }
            })
        ptrackerData.loopAndMapThroughDataFromOdkCentral(
                response_with_submission_data, tableColumns)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.greaterThanOrEqual(1);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(ptrackerData, 'loopAndMapThroughDataFromOdkCentral')
            .resolves({
                body: JSON.stringify(response_with_submission_data),
                response: {
                    statusCode: 200
                }
            })
        ptrackerData.loopAndMapThroughDataFromOdkCentral(
                response_with_submission_data)
            .catch(error => {
                expect(result.response.statusCode).to.be.eq(200);
                expect(error).to.be.equal('- Error while mapping Data from ODK Central:.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(ptrackerData, 'loopAndMapThroughDataFromOdkCentral')
            .resolves({
                body: JSON.stringify(response_with_submission_data),
                response: {
                    statusCode: 200
                }
            })
        ptrackerData.loopAndMapThroughDataFromOdkCentral()
            .catch(error => {

                expect(error).to.be.equal('- No records to map.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});



describe(`Get PTracker Data Function: updateReviewStateFromOdkCentralAndInsertToMysql()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore()
    });

    it(`should return a response message when a record is updated and upserted to MYSQl when all the required parameters are provided`, () => {
        const getStub = sandbox.stub(ptrackerData, 'updateReviewStateFromOdkCentralAndInsertToMysql')
            .resolves('Succesfully UPSERTED record');
        ptrackerData.updateReviewStateFromOdkCentralAndInsertToMysql(
                stag_odk_anc, tableColumns, visit_type, table_name)
            .then((result) => {
                expect(result).to.be.equal('Succesfully UPSERTED record');
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(ptrackerData, 'updateReviewStateFromOdkCentralAndInsertToMysql')
            .resolves({});
        ptrackerData.updateReviewStateFromOdkCentralAndInsertToMysql(
                stag_odk_anc, tableColumns)
            .catch(error => {
                expect(error).to.be.equal('- Error while upserting record.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(ptrackerData, 'updateReviewStateFromOdkCentralAndInsertToMysql')
            .resolves({});
        ptrackerData.updateReviewStateFromOdkCentralAndInsertToMysql()
            .catch(error => {

                expect(error).to.be.equal('- Error while upserting record.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});


describe(`Get PTracker Data Function: upsertRecordsToMYSQL()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore()
    });

    it(`should return a response message when a record is upserted to MYSQl when all the required parameters are provided`, () => {
        const getStub = sandbox.stub(ptrackerData, 'upsertRecordsToMYSQL')
            .resolves('Succesfully UPSERTED record');
        ptrackerData.upsertRecordsToMYSQL(
                response_with_submission_data, stag_odk_anc, table_name)
            .then((result) => {
                expect(result).to.be.equal('Succesfully  UPSERTED record');
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(ptrackerData, 'upsertRecordsToMYSQL')
            .resolves();
        ptrackerData.upsertRecordsToMYSQL(
                response_with_submission_data)
            .catch(error => {
                expect(error).to.be.equal('- Error while upserting record.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(ptrackerData, 'upsertRecordsToMYSQL')
            .resolves();
        ptrackerData.upsertRecordsToMYSQL()
            .catch(error => {

                expect(error).to.be.equal('- Error while upserting record.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});


describe(`Get PTracker Data Function: updateReviewStateToOdkCentral()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => {
        sandbox.restore()
    });

    it(`should return a success message when the review state of a record is updated to ODK Central`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'updateSubmissionReviewState')
            .resolves({ response: { statusCode: 200 }, body: response_after_updating_review_state })
        OdkCentral.prototype.updateSubmissionReviewState(submission_uuid.valid_uuid, review_state.valid_reviewState)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.greaterThanOrEqual(1);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'updateSubmissionReviewState')
            .resolves({ response: { statusCode: 404 } })
        ptrackerData.updateReviewStateToOdkCentral(
                review_state)
            .catch(error => {
                expect(result.response.statusCode).to.be.eq(200);
                expect(error).to.be.equal('- Error while retrieving Data from ODK Central:.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'updateSubmissionReviewState')
            .resolves({})
        ptrackerData.updateReviewStateToOdkCentral()
            .catch(error => {
                expect(error).to.be.equal('- Cannot retrieve submission records without tableColumns, visit_type, table_name.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});