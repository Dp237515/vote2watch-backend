const mongoose = require("mongoose");

//this is needed to export the schema so that it can be used to
//save the information from the Netflix API
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  //movie name info
  movieName: { 
    type: String, 
    default: "yeet",
     required: false 
  },
  //the amount of votes the movie has
  votes: { 
    type: Number,
     default: 0,
      required: false
  },
  //the ??? (Ryley or Noah please fill this in)
  movieRoomID: { type: String,
     default: "4e5rd",
      required: false 
  }
});

//this exports the model, the name of our collection, and the schema
//to be used to store things from Netflix
module.exports = Movie = mongoose.model("Movie", movieSchema);