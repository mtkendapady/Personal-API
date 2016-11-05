const express = require("express");
const { json } = require("body-parser");
const middleware = require("./controllers/middleware.js");
const mainCtrl = require("./controllers/mainCtrl.js");

const app = express();
const port = 8888;

app.use( json() );
app.use( middleware.addHeaders );

//GETS//
app.get( "/name", mainCtrl.getName );
app.get( "/location", mainCtrl.getLocation );
app.get( "/occupations", mainCtrl.getOccupations );
app.get( "/hobbies", mainCtrl.getHobbies );
//app.get( "/hobbies/:type", mainCtrl.hobbies.filter( findHobbyType ) );
app.get( "/family", mainCtrl.getFamily );
//app.get( "/family/:gender", mainCtrl.family.filter( findGender ) );
app.get( "/restaurants", mainCtrl.getRestaurants );
//app.get( "/restaurants/:name", mainCtrl.restaurants.filter( findRestaurantName ) );

//PUTS//
app.put( "/name/:newName", mainCtrl.updateName );
app.put( "/location/:newLocation", mainCtrl.updateLocation );

//POSTS//
// app.post( "/hobbies", mainCtrl.addHobby );
// app.post( "/occupations", mainCtrl.addOccupations );
// app.post( "/family", mainCtrl.addFamily );
// app.post( "/restaurants", mainCtrl.addRestaurant );

//Add Skills Attribute//

app.listen( port, () => console.log( `Express listening on ${ port }`) );
