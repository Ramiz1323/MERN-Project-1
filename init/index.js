const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

//Connect with DB
const MONGO_URL = "mongodb://localhost:27017/test";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Initialize database
const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Database initialized");
};

initDB();