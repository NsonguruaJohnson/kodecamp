const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI.replace('<PASSWORD>', process.env.DB_PASSWORD);

// DB = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
            autoCreate: true,
        });
        console.log("MongoDb connected ...")

    } catch (err) {
        console.log('Databse connection failed');
        console.log(err);
        console.log(err.message);

        // Exit with failure
        process.exit(1);
    }
}

module.exports = connectDb;
