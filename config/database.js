const mongoose = require('mongoose');

require('dotenv').config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Db connected successfully."))
    .catch((e) => {
        console.error("Db facing connection issues",e);
        process.exit(1);
    })
}

module.exports = connectWithDb;