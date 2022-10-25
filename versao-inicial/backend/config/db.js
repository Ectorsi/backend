const config = require('../knexfile.js');
const knexConnection = require('knex')(config); // No do prof está como knex

knexConnection.migrate.latest([config]);
module.exports = knexConnection;