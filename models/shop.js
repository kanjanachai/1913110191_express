const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    photo: { type: String, default: 'nopic.png' },
    location:{
        lat: Number,
        lgn: Number,
    },
    // createdAt: { type: Date, default: Date.now },
    // UpdatedAt: { type: Date, default: Date.now },
  },{ 
    timestamps: true,
    collection: "shops" 
}
);

const shop = mongoose.model("Shop", shopSchema);

module.exports = shop;
