const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { OdkCentral } = require("../../src/odkCentral/odk-central-api");
const odkCentral = new OdkCentral();
var fs = require('fs');
const sinon = require('sinon')
const expect = chai.expect;
const {
    response_after_updating_review_state,
    response_with_repeat_group_submission_data,
    response_with_submission_data,
    empty_response,
    error_response_1,
    submission_uuid,
    review_state
} = require('../dummy-data/api-data');

describe(`OdkCentral API  Function:: getClientSubmissionDataFromOdkCentral()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });

    it(`should return a response with client submission data`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: response_with_submission_data })
        OdkCentral.prototype.getClientSubmissionDataFromOdkCentral()
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.greaterThanOrEqual(1);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return a response with no client submission data when there are no submissions`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: empty_response })
        OdkCentral.prototype.getClientSubmissionDataFromOdkCentral()
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.eq();
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return an error response when a parameter is passed`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: error_response_1 })
        OdkCentral.prototype.getClientSubmissionDataFromOdkCentral('uuid')
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.eq();
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

});

describe(`OdkCentral API  Function:: getClientSubmissionDataFromOdkCentralForRepeatGroups()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });

    it(`should return a response with infant submission data`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: response_with_repeat_group_submission_data })
        OdkCentral.prototype.getClientSubmissionDataFromOdkCentralForRepeatGroups(submission_uuid.valid_uuid)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.greaterThanOrEqual(1);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return a response with no infant data if invalid uuid is passed`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: error_response_1 })
        OdkCentral.prototype.getClientSubmissionDataFromOdkCentralForRepeatGroups(submission_uuid.invalid_uuid)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.eq();
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return an empty response when no uuid is passed`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 404 }, body: empty_response })
        OdkCentral.prototype.getClientSubmissionDataFromOdkCentralForRepeatGroups()
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(404);
                let res = result.body;
                expect(res.length).to.be.eq(0);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })
});



describe(`OdkCentral API  Function:: updateSubmissionReviewState()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });

    it(`should return a response when a submission review state is updated`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: response_after_updating_review_state })
        OdkCentral.prototype.updateSubmissionReviewState(submission_uuid.valid_uuid, review_state.valid_reviewState)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.greaterThanOrEqual(1);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return an erro response when invalid uuid is passed`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: error_response_1 })
        OdkCentral.prototype.updateSubmissionReviewState(submission_uuid.invalid_uuid, review_state)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.eq();
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return an erro response when invalid review state is passed`, (done) => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 200 }, body: error_response_1 })
        OdkCentral.prototype.updateSubmissionReviewState(submission_uuid.valid_uuid, review_state.invalid_reviewState)
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(200);
                let res = result.body;
                expect(res.length).to.be.eq();
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch(done);
    })

    it(`should return an empty response when no uuid or review state is passed is passed`, () => {
        const getStub = sandbox.stub(OdkCentral.prototype, 'sendRequest')
            .resolves({ response: { statusCode: 404 }, body: empty_response })
        OdkCentral.prototype.updateSubmissionReviewState()
            .then((result) => {
                expect(result.response.statusCode).to.be.eq(404);
                let res = result.body;
                expect(res.length).to.be.eq(0);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })
});