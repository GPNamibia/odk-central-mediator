const privateConfig = require('../config/private-config.json');
const auth = require('basic-auth');

const admin = {
    username: privateConfig.authConfig.name,
    password: privateConfig.authConfig.password
}

function authenticate(request, response) {
    let user = auth(request);
    if (!user || !admin.username || admin.password !== user.pass) {
        // response.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
        // return response.status(401).send();
    }
    return response;
}

module.exports = {
    authenticate
}