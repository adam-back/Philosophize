var express = require('express');
var router = express.Router();
var wiki = require( '../helpers/wikiHelpers.js' );

router.post('/', function(req, res, next) {
  wiki.findPhilosophy( req.body.url )
  .then(function( result ) {
    res.send( result );
  })
  .catch(function( error ) {
    res.status( 500 ).send( error.message );
  });
});


module.exports = router;
