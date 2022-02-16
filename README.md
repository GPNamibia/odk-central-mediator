# PTracker ODK Central Mediator
This mediator is intended for retrieving submission data from ODK Central and  storing the data into the MySQL Repository.

# Private Configurations
The `private-config.json` is used to store all the credentials and connection URLs of the mediator. The credentials are currently left out, so the file needs to be renamed with all the required credentials and URLs before installation for the mediator to work.

# Installation
The mediator can be built and run using the `docker-compose.yml` file configurations.

To run the mediator without connecting it to the OpenHIM server, you can use the following command if you have `Node.js` installed:
```npm start```

# Tests
You can run the Unit tests using the following command:
```npm run test```
