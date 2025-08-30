const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const path = require('path');
const methodOverride = require('method-override');

app.listen(8080, () =>{
    console.log('Server is running on port 8080');
})

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

//ejs Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/listings"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

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
});

app.get('/listings', async (req,res) =>{        //Index Route
    const allListings = await Listing.find({});
    res.render("index.ejs", {allListings});
});

app.get('/listings/new', (req,res) =>{          //New Route
    res.render("new.ejs");
});


app.get('/listings/:id', async (req,res) =>{   //Show Route
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("show.ejs", { listing });
});


app.post('/listings', async (req, res)=>{       //Create new listing
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
});

app.get('/listings/:id/edit', async (req,res) =>{   //Edit Route
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("edit.ejs", { listing });
})

app.put('/listings/:id', async (req,res) =>{   //Update Route
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    res.redirect('/listings/' + id);
})