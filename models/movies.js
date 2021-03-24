const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  //TODO: we can delete this later
  id: {type: Number, default: 7, required: true},
  movieName: { type: String, default: "yeet", required: false },
  votes: { type: Number, default: 0, required: false },
  movieRoomID: { type: String, default: "4e5rd", required: false },
  img: { type: String, required: false},
  runtime: { type: Number, required: false},
  year: { type: Number, required: false}
});

module.exports = mongoose.model("Movie", movieSchema);
