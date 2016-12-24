/**
 * Created by elex on 23.12.2016.
 */
var ms_conn = require('../connect/mssql_conn_pool');


var Request = require('tedious').Request;
/*для типов даннх в запросе*/
var TYPES = require('tedious').TYPES;
function Users() {

    this.tbl_users = 'users';
    this.tbl_groups = 'groups';

    this.get = function(user_id, res) {



    }
}

module.exports = new Users();
