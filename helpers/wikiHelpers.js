var Q = require( 'q' );
var request = require( 'request' );
var http = {
  request: request
};

var getWikiPage = function( url ) {
  var deferred = Q.defer();

  request( url, function ( error, response, body ) {
    if ( !error && response.statusCode == 200 ) {
      deferred.resolve( body );
    } else {
      deferred.reject( error );
    }
  })

  return deferred.promise;
};

exports.findPhilosophy = function( url ) {
  return getWikiPage( url );
};