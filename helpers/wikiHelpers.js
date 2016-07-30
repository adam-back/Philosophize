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

var processStaticPage = function( htmlContents, path ) {
  // get the page title
  var title = 'Not Philosophy';

  if ( title === 'Philosophy' ) {
    return Q( true );
  } else {
      // save the page
      // update the path
      // not done
    return Q( false );
  }
};

exports.findPhilosophy = function( url ) {
  var path = models.path.build();

  return getWikiPage( url );
  // determine page title
  // if philos
  // determine the first link
  // check for philosophy
  // if philosophy
    // return done metrics
  // not philosophy

};