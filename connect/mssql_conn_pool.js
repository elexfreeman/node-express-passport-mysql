/*������ ��� ������ � mssql*/
var ConnectionPool = require('tedious-connection-pool');
var Connection = require('tedious').Connection;

var poolConfig = {
    min: 2,
    max: 4,
    log: true
};

/*����������� � ����*/
var config = {
    userName: 'sa',
    password: '1qazxsw23edcvfr4!',
    server: '192.168.1.224',
    // If you are on Microsoft Azure, you need this:
    //options: {encrypt: true, database: 'AdventureWorks'}
    options: {rowCollectionOnRequestCompletion : true}
};

/*����� ���������*/
function ms_Connection() {

    /*��� ������������*/
    this.pool = new ConnectionPool(poolConfig, config);

    /*���� ������*/
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

