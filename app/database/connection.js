const mysql = require('mysql');


const dbconfig = {
    connect: function(){
        if(process.env.DB_HOST == '' || process.env.DB_USER == '' || process.env.DB_PASSWORD == '' || process.env.DB_NAME == ''){
            console.log('DB Not found')
        }

        const connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        connection.connect();
    },

    close: function(connection){
        if(!Object.prototype.hasOwnProperty.call(connection, 'end')) {
            console.log("DB Not Found")
        }
        connection.end();
    }
}
exports.modules = dbconfig;