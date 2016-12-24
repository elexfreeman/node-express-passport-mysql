/*модуль для работы с mssql*/
var Connection = require('tedious').Connection;

/*подключение к базе*/
var config = {
    userName: 'sa',
    password: '1qazxsw23edcvfr4!',
    server: '192.168.1.224',
    // If you are on Microsoft Azure, you need this:
    //options: {encrypt: true, database: 'AdventureWorks'}
   // options: {encrypt: true}
};

/*подключение*/
var connection = new Connection(config);
/*для запроссов*/
var Request = require('tedious').Request;
/*для типов даннх в запросе*/
var TYPES = require('tedious').TYPES;

/*скласс пделючния*/
function ms_Connection() {

    /*запрос на экспорт*/
    this.query = function(sql_query, callback, res) {
        /*пытаеся подключиться*/
        console.info('try connect to ' + config.server);
        connection.on('connect', function(err) {
            // If no error, then good to proceed.
            console.log("Connected");
            /*если подключились соираем запрос*/
            request = new Request(sql_query, function(err) {
                if (err) {
                    console.log(err);}
            });

            /*выполннеи запрса*/
            request.on('row', function(columns) {

                /*колбэк на вывод данных куда нить выполняется после отрабтки запроса*/
                callback(columns);
                /*закрываем соединение*/
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

