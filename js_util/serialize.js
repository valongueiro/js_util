/*
 * Serialize set of data. It can take two different types of objects:
 * 1. An array of input elements
 * 2. A hash of key/value pairs
 * 
 * Returns a serialized string
 */
function serialize(a) {
	// The set of serialize results
	var s = [];
	
	// If an array was passed in, assume that it is an array of form elements
	if(a.constructor === Array) {
		// Serialize the form elements
		for(var i = 0; i < a.length; i++) {
			s.push( a[i].name + "=" + encodeURIComponent(a[i].value) );
		}
	// Otherwise, assume that it's an object of key/value pairs, a literal object	
	} else {
		// Serialize literal object
		for(var j in a) {
			s.push( j + "=" + encodeURIComponent(a[j]) );
		}
	}
	// Return the serialized string
	return s.join("&");
}
