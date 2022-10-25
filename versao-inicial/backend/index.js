const app = require('express')();
const consign = require('consign');
const knexConnection= require('./config/db'); // no do prof é db

app.db = knexConnection;

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})