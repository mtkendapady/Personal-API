const user = require('../user');

module.exports = {

  getName( req, res ) {
    return res.status( 200 ).json( { "name" : user.name } );
  },

  getLocation( req, res ) {
    return res.status( 200 ).json( { "location" : user.location } )
  },

  getOccupations( req, res ) {
    return res.status( 200 ).json( { "occupations" : user.occupations } )
  },

  getHobbies( req, res ) {
    return res.status( 200 ).json( { "hobbies" : user.hobbies } )
  },

  getFamily( req, res ) {
    return res.status( 200 ).json( { "family" : user.family } )
  },

  getRestaurants( req, res ) {
    return res.status( 200 ).json( { "restaurants" : user.restaurants } )
  },

  updateName( req, res ) {
    let newName = req.params.newName;
    console.log(newName);
    if (newName) {
      user.name = newName;
      return res.status( 200 ).json( { "message" : `Updated name to ${ newName }` });
    }
  },

  updateLocation( req, res ) {
    let newLocation = req.params.newLocation;
    console.log(newLocation);
    if (newLocation) {
      user.location = newLocation;
      return res.status( 200 ).json( { "message" : `Updated name to ${ newLocation }` });
    }
  },
}
