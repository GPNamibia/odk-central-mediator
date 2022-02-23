# PTracker ODK Central Mediator
This mediator is intended for retrieving submission data from ODK Central and  storing the data into the MySQL Repository.

# Private Configurations
The `private-config.json` is used to store all the credentials and connection URLs of the mediator. The credentials are currently left out, so the file needs to be renamed with all the required credentials and URLs before installation for the mediator to work.

# Installation


# Running in Localhost

To run the mediator without connecting it to the OpenHIM server, you can use the following commands if you have `Node.js` installed:

1. `cd ptracker-odk-central-mediator`

2. `npm install`

3. Create a database called `mysqlrepo`

4. `npm start`

# Running in Docker

The mediator can be built and run using the `docker-compose.yml` file configurations.

1. Navigate to `odk-central-mediator` folder where the  `docker-compose.yml` is.

2. `docker-compose build`

3. `docker-compose up -d`

4. `docker network create openHIM`

5. `docker exec -it <container id> sh`

6. `mysql -u root -h<mysql image name> -P<mysql port> -p`

6. CREATE DATABASE IF NOT EXISTS `mysqlrepo`;



# Tests

You can run the Unit tests using the following command:

1. `cd ptracker-odk-central-mediator`

2. `npm run test`
