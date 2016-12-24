var sql = require('mssql');

var config = {
    user: 'sa',
    password: '1qazxsw23edcvfr4!',
    server: '192.168.1.224', // You can use 'localhost\\instance' to connect to named instance
   // database: '192.168.1.224',
   // stream: true, // You can enable streaming globally

    options: {
       // encrypt: true // Use this if you're on Windows Azure
    }
}



var MyConnect = function() {

    this.query = function (callback) {

        sql.connect(config).then(function () {
            // Query

            new sql.Request();
            sql.input('1', sql.Int, value).
                query('select * [DISP_WEB].[dbo],[users] where id = @input_parameter').then(function (recordset) {
                    console.dir(recordset);
                }).catch(function (err) {
                    // ... error checks
                });

        });

    }
};

module.exports = new MyConnect();