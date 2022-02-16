const express = require("express");
const { authenticate } = require('./config/authentication.js');
const ptrackerData = require('./odkCentral/odk-central.js');
const privateConfig = require('./config/private-config.json');
const mediatorConfig = require('./config/mediator-config.json')
const db = require('./models');
const cron = require("node-cron");
const app = express();

// OpenHIM
const { registerMediator, activateHeartbeat, fetchConfig } = require('openhim-mediator-utils');
let queryParams;
const openhimVars = privateConfig.openhimConfig;
const openhimConfig = {
    username: openhimVars.username,
    password: openhimVars.password,
    apiURL: openhimVars.apiURL,
    trustSelfSigned: true,
    urn: mediatorConfig.urn
}
const emitter = activateHeartbeat(openhimConfig);

registerMediator(openhimConfig, mediatorConfig, err => {
    if (err) {
        throw new Error(`Failed to register mediator. Check your Config. ${err}`)
    }
});

fetchConfig(openhimConfig, (err, initialConfig) => {
    if (err) {
        throw new Error(`Failed to fetch initial config. ${err}`)
    }
    console.log('Initial Config: ', JSON.stringify(initialConfig))
    queryParams = initialConfig.labResultsParams
});

emitter.on('error', err => {
    console.error('Heartbeat failed: ', err)
});

emitter.on('config', newConfig => {
    console.log('Received updated config:', JSON.stringify(newConfig))
    queryParams = newConfig.labResultsParams
});

function getQueryParameters() { return queryParams }
module.exports = { getQueryParameters };


app.all('*', async(req, res) => {
    // Starts when a new request is triggered by the polling channel
    console.log(`\n---------------------------------------------------------------------------------`,
        `\n${ new Date().toUTCString('en-GB', { timeZone: 'UTC' }) }  - `,
        `The PTracker ODK Central Mediator has received a new request. \n`
    );
    ptrackerData.getPtrackerdata()
        .then((results) => {
            try {
                res.json('PTracker Data from ODK Central retrieved.')
            } catch (error) {
                console.error(`Error retrieving PTracker Data from ODK Central: ${error}`)
            }

        }).catch(error => { console.log(`Error retrieving PTracker Data: ${error}`) })
});

//Server PORT
db.sequelize.sync().then((req) => {
    ptrackerData.getPtrackerdata()
    app.listen(privateConfig.appConfig.PORT, (err) => {
        if (err) console.log(`Error: ${err}`)
        console.log(`${privateConfig.appConfig.mediatorName}  listening on port ${privateConfig.appConfig.PORT}...  \n`);
    });
}).then(() => {
    console.log(`Succesfully connected to '${privateConfig.development.database}' database...  \n`)
}).catch(err => { console.log(`Error when connecting to '${privateConfig.development.database}' database...:: \n`, err) })