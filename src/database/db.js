const Database = require('sqlite-async')

// defining the function
function execute(db)
{
    // create tables of database
    // each teacher has/have a class and each class has/have day and time to run
    // SQLite
     return db.exec(`
         CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
         );

         CREATE TABLE IF NOT EXISTS classes (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             subject INTEGER,
             cost TEXT,
             proffy_id INTEGER
         );

         CREATE TABLE IF NOT EXISTS class_schedule (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             class_id INTEGER,
             weekday INTEGER,
             time_from INTEGER,
             time_to INTEGER
         );
    `)
    // l 10 - id eh o nome da coluna e o tipo do dado dela eh um número inteiro
    // l 14 - o ultimo não leva virgula
}

// To not take the risk of running other command or another line of code before the database is open, use ( .then() )
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)