const mongoose = require("mongoose");
//import the movie schema
const Movie = require("./models/movies");
//this is the database stuff, not too sure about this
const db = require("./config/keys").mongoURI;
//need the fetch node
const fetch = require("node-fetch");

//this is where the data gotten from Netflix is temporarily stored
let resultData;
//save counter to 
let saveCounter = 0;

//this connects mongoose with the database, and gives meesages about 
//whether the connection was sucessful
mongoose.connect(db).then(() => console.log("mongodb connection success")).catch(error => console.log(error));

//this is the link to the API, needs to be tested to make sure this
//is the API we want
const url = ['https://unogsng.p.rapidapi.com/search']

url.map(async url => {
    
try{
    const response = await fetch(url);
    const json = await response.json();
    resultData = [...json];

    //fills the info into the movie
    for (let i = 0; i < resultData.length; i++) {
       //where info is filled
        let movie = new Movie({
            movieName: resultData[i].title,
        })

        //saves the movie to the database
        movie.save(() => {
            console.log("saved" + movie)
            
            saveCounter++;
            
            //checks if the save counter exceeds the length
            if (saveCounter === resultData.length) {
                mongoose.disconnect().then(() => console.log("saved succesfully and mongodb disconnected"))
                .catch(error => console.log(error));
            }
        });
    }
 } catch (error) {
    console.log(error);
 }

})