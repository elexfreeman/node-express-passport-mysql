/*������ ��� ������ � mssql*/
var Connection = require('tedious').Connection;

/*����������� � ����*/
var config = {
    userName: 'sa',
    password: '1qazxsw23edcvfr4!',
    server: '192.168.1.224',
    // If you are on Microsoft Azure, you need this:
    //options: {encrypt: true, database: 'AdventureWorks'}
   // options: {encrypt: true}
};

/*�����������*/
var connection = new Connection(config);
/*��� ���������*/
var Request = require('tedious').Request;
/*��� ����� ����� � �������*/
var TYPES = require('tedious').TYPES;

/*������ ���������*/
function ms_Connection() {

    /*������ �� �������*/
    this.query = function(sql_query, callback, res) {
        /*������� ������������*/
        console.info('try connect to ' + config.server);
        connection.on('connect', function(err) {
            // If no error, then good to proceed.
            console.log("Connected");
            /*���� ������������ ������� ������*/
            request = new Request(sql_query, function(err) {
                if (err) {
                    console.log(err);}
            });

            /*��������� ������*/
            request.on('row', function(columns) {

                /*������ �� ����� ������ ���� ���� ����������� ����� �������� �������*/
                callback(columns);
                /*��������� ����������*/
               // connection.release();
                connection.close();

                /*    columns.forEach(function(column) {
                 if (column.value === null) {
                 console.log('NULL');
                 } else {
                 result+= column.value + " ";
                 }
                 });*/


            });

            request.on('done', function(rowCount, more) {
                console.log(rowCount + ' rows returned');
            });

            connection.execSql(request);
        });

    }
}


module.exports = new ms_Connection();

