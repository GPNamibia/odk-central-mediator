const express = require("express");
const ptrackerData = require('./odkCentral/odk-central.js');
const privateConfig = require('./config/private-config.json');
const { getQueryParameters } = require('./openhim/initialize');
const db = require('./models');
const app = express();

//openHIM
//getQueryParameters();

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

        }).catch(error => { console.error(`Error retrieving PTracker Data: ${error}`) })
});

//Server PORT
db.sequelize.sync({}).then((req) => {
    app.listen(privateConfig.appConfig.PORT, (err) => {
        if (err) console.log(`Error: ${err}`)
        console.log(`${privateConfig.appConfig.mediatorName}  listening on port ${privateConfig.appConfig.PORT}...  \n`);
    });
}).then(() => {
    console.log(`Succesfully connected to '${privateConfig.development.database}' database...  \n`)
}).catch(err => { console.log(`Error when connecting to '${privateConfig.development.database}' database...:: \n`, err) })