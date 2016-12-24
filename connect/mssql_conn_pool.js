/*модуль для работы с mssql*/
var ConnectionPool = require('tedious-connection-pool');
var Connection = require('tedious').Connection;

var poolConfig = {
    min: 2,
    max: 4,
    log: true
};

/*подключение к базе*/
var config = {
    userName: 'sa',
    password: '1qazxsw23edcvfr4!',
    server: '192.168.1.224',
    // If you are on Microsoft Azure, you need this:
    //options: {encrypt: true, database: 'AdventureWorks'}
    options: {rowCollectionOnRequestCompletion : true}
};

/*класс пделючния*/
function ms_Connection() {

    /*пул подключенией*/
    this.pool = new ConnectionPool(poolConfig, config);

    /*если ошибка*/
    this.pool.on('error', function(err) {
        console.error(err);
    });

    this.query = function(res, callback) {

        //acquire a connection
        this.pool.acquire(function (err, connection) {
            callback(err, connection, res);
        });
    }

}





module.exports = new ms_Connection();

