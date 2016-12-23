var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '141.0.177.182',
    user     : 'node_test',
    password : '!qazxsw2',
    database : 'node_test'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('You are now connected...')
});

module.exports = connection;

