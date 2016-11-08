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

  addHobby( req, res ) {
    if(req.body && req.body.name && req.body.type) {
      user.hobbies.push( req.body );
      return res.status( 200 ).json( { "message" : "New hobby added" } );
    }
    return res.status( 400 ).json( { "message" : "Hobby not added" } );
  },

  addOccupation( req, res ) {
    if(req.body) {
      user.occupations.push( req.body );
      return res.status( 200 ).json( { "message" : "New occupation added" } );
    }
    return res.status( 400 ).json( { "message" : "Occupation not added" } );
  },

  addFamily( req, res ) {
    if(req.body && req.body.name && req.body.relation && req.body.gender) {
      user.family.push( req.body );
      return res.status( 200 ).json( { "message" : "New family member added." } );
    }
    return res.status( 400 ).json( { "message": "Family member not added." } );
  },

  addRestaurant( req, res ) {
    if(req.body && req.body.name && req.body.type && req.body.rating) {
      user.restaurants.push( req.body );
      return res.status( 200 ).json( { "message" : "New Restaurant added" } );
    }
    return res.status( 400 ).json( { "message" : "Unable to add new restaurant." } );
  },

  // Skills

  // Secrets

}
