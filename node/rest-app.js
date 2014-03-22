var Client = require('node-rest-client').Client;

var baseURL = "https://www.skyparse.com/api/hrxml?";
var filePath = "/Users/brendan/Development/skyparse-api-examples/node/examplecv.docx";

function encodeFile(filePath){
	var fs = require('fs');
	var encodedFile;

	console.log(filePath);

	fs.readFile(filePath, function(err, data) {
		encodedFile = new Buffer(data).toString('base64');
	})

	return encodedFile;
}

function getCV() {
	var client = new Client(); // New instance of the rest client
	
	args = {
		path: { "accountID": '13213', "secretKey": 'test', "parseID": '1008'} // Setup the path variables
	};
	
	client.get(baseURL + "accountid=${accountID}&secretkey=${secretKey}&parseid=${parseID}", args, function(data, response) { // Make rest call
		console.log(data); // Return results to console
	});
}

function postCV() {
	var unirest = require('unirest');
	
	unirest.post(baseURL	)
	.headers({'Accept': 'application/xml'})
	// .field(name: string, value: string)
	.send({
		'accountID': '13213',
		'secretKey': 'test',
		'fileName': 'examplecv.docx'
	})
	.attach('file', '://Development/skyparse-api-examples/node/examplecv.docx')
	.end(function (response) {
		console.log(response.body)
	})
}

postCV();