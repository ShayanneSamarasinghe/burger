const mysql = require("mysql");

class Database {
  constructor( config ) {
      // ternary operator
      // true ? "I am true" : "I am false"
      // hungry ? "Make me a sandwhich" : "Nah, I'm good"
      // jawsdbexists ? "use jaws db" : "use localhost"
    // var connectionURL;
    //   if (process.env.JAWSDB_URL) {
    //     connectionURL = process.env.JAWSDB_URL
    //   } else {
    //       connectionURL = config
    //   }
      // null coalescing operator
      // true ?? false // return true
      this.connection = mysql.createConnection( process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config) 
  }
  query( sql, args ) {
      return new Promise( ( resolve, reject ) => {
          this.connection.query( sql, args, ( err, rows ) => {
              if ( err )
                  return reject( err );
              resolve( rows );
          } );
      } );
  }
  close() {
      return new Promise( ( resolve, reject ) => {
          this.connection.end( err => {
              if ( err )
                  return reject( err );
              resolve();
          } );
      } );
  }
}

const db = new Database({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    insecureAuth: true,
});

module.exports = db