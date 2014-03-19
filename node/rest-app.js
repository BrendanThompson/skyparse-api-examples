var Client = require('node-rest-client').Client;

client = new Client(); // New instance of the rest client

args = {
	path: { "accountID": '13213', "secretKey": 'test', "parseID": '1008'} // Setup the path variables
};

client.get("https://www.skyparse.com/api/hrxml?accountid=${accountID}&secretkey=${secretKey}&parseid=${parseID}", args, function(data, response) { // Make rest call
	console.log(data); // Return results to console
});