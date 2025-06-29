const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const path = require('path');

// Connect with DB
const MONGO_URL = "mongodb://localhost:27017/test";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

//Routes
// app.get('/testListing',async (req,res) =>{
//     let sampleListing = new Listing({
//         title: 'My New Villa',
//         description: 'by the sea',
//         price: 5000,
//         location: 'Madrid',
//         country: 'Spain'
//     })
//     await sampleListing.save();
//     console.log('Listing saved');
//     res.send('Listing saved successfully');
// })
app.get('/', (req,res) =>{
    res.send('Hello Root');
})


app.get('/listings', async (req,res) =>{
    const allListings = await Listing.find({});
    res.render("index.ejs", {allListings});
})

app.listen(8080, () =>{
    console.log('Server is running on port 8080');
})
