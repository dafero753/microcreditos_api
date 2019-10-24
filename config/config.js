//const STRING_CONNECTION = "mongodb://app:1234@localhost:27017/microcreditos_db"
const STRING_CONNECTION = "mongodb+srv://Admin:Admin1234@cluster0-vnlsq.mongodb.net/microcredits_db"

module.exports = {
    PORT: process.env.PORT || 9000,
    DB_CONNECTION: STRING_CONNECTION
}