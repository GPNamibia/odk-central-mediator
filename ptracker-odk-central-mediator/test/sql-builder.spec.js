const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { OdkCentral } = require("../src/odkCentral/odk-central-api");
const odkCentral = new OdkCentral();
var fs = require('fs');
const sinon = require('sinon');
const expect = chai.expect;
const { stag_odk_anc } = require("../src/models");
const sqlBuilder = require('../src/db/sql-builder.js');
const { newItem, submission_uuid, ptracker_id } = require('./dummy-data/get-ptracker-data');


describe(`Sequalize Builder Function: upsertRecordToMysql()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });

    it(`should return a success message of true if the item is created or updated`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'upsertRecordToMysql')
            .resolves(true)
        sqlBuilder.upsertRecordToMysql(stag_odk_anc, newItem, submission_uuid)
            .then((result) => {
                expect(result).to.be.equal(true);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'upsertRecordToMysql')
            .resolves()
        sqlBuilder.upsertRecordToMysql(stag_odk_anc, newItem)
            .catch(error => {
                expect(error).to.be.equal('- Cannot upsert record without submission uuid.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'upsertRecordToMysql')
            .resolves()
        sqlBuilder.upsertRecordToMysql()
            .catch(error => {
                expect(error).to.be.equal('- Error while updating records.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});


describe(`Sequalize Builder Function: updateReviewStateToMysql()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });

    it(`should return a success message of true if the item is created or updated`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'updateReviewStateToMysql')
            .resolves(true)
        sqlBuilder.updateReviewStateToMysql(stag_odk_anc, submission_uuid)
            .then((result) => {
                expect(result).to.be.equal(true);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'updateReviewStateToMysql')
            .resolves()
        sqlBuilder.updateReviewStateToMysql(stag_odk_anc)
            .catch(error => {
                expect(error).to.be.equal('- Cannot upsert review state without submission uuid.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'updateReviewStateToMysql')
            .resolves()
        sqlBuilder.updateReviewStateToMysql()
            .catch(error => {
                expect(error).to.be.equal('- Error while updating review state.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});

describe(`Sequalize Builder Function: upsertRepeatGroupRecordToMysql()`, () => {
    const sandbox = sinon.createSandbox();
    afterEach(() => { sandbox.restore() });

    it(`should return a success message of true if the item is created or updated`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'upsertRepeatGroupRecordToMysql')
            .resolves(true)
        sqlBuilder.upsertRepeatGroupRecordToMysql(stag_odk_anc, newItem, ptracker_id)
            .then((result) => {
                expect(result).to.be.equal(true);
                expect(getStub).to.have.been.calledOnce;
                done();
            })
            .catch();
    })

    it(`should return an error message if any of the parameters are missing or undefined`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'upsertRepeatGroupRecordToMysql')
            .resolves()
        sqlBuilder.upsertRepeatGroupRecordToMysql(stag_odk_anc, newItem)
            .catch(error => {
                expect(error).to.be.equal('- Cannot upsert record without submission uuid.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })

    it(`should return an error message if no parameters are passed`, () => {
        const getStub = sandbox.stub(sqlBuilder, 'upsertRepeatGroupRecordToMysql')
            .resolves()
        sqlBuilder.upsertRepeatGroupRecordToMysql()
            .catch(error => {
                expect(error).to.be.equal('- Error while updating records.\n');
                expect(getStub).to.have.not.been.called;
                done();
            });
    })
});