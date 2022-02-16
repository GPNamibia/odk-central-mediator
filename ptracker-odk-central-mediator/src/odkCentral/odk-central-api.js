const request = require('request');
const privateConfig = require('../config/private-config.json');

const config = privateConfig.odkCentralConfig;

class OdkCentral {
    constructor() {}
    sendRequest(options) {
        return new Promise((resolve, reject) => {
            request(options, function(err, response, body) {
                if (err) return reject(`Error sending request to ODK Central: ${err.message}`)
                const contentType = response.headers['content-type']
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return resolve({ response: response, body: body })
                } else {
                    return reject(null)
                }
            });
        })
    }

    getClientSubmissionDataFromOdkCentral() {
        let options = {
            method: 'GET',
            url: config.apiURL + `.svc/Submissions`,
            qs: {},
            headers: config.headers,
            form: false,
            auth: {
                user: config.username,
                pass: config.password
            }
        }
        return this.sendRequest(options)

    }

    updateSubmissionReviewState(submission_uuid, review_state) {
        if (submission_uuid) {
            let options = {
                method: 'PATCH',
                url: config.apiURL + `/submissions/${submission_uuid}`,
                qs: {},
                headers: config.headers,
                form: false,
                auth: {
                    user: config.username,
                    pass: config.password
                },
                json: true,
                body: {
                    reviewState: review_state
                }
            }
            return this.sendRequest(options)

        }
    }
}

module.exports = {
    OdkCentral
};

// ?%24filter=__system%2FreviewState%20eq%20'approved'