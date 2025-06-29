const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : String,
    image : {
        type: String,
        default: "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?t=st=1750608683~exp=1750612283~hmac=b055a53ca017c0fd17926271303f6fea3d7cc4f003ad9377c2b3623c55b0ad27&w=2000",
        set: (v) => v === "" ? "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?t=st=1750608683~exp=1750612283~hmac=b055a53ca017c0fd17926271303f6fea3d7cc4f003ad9377c2b3623c55b0ad27&w=2000": v,
    },
    price: Number,
    location: String,
    country: String
})

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;