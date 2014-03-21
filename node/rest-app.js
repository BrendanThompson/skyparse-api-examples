var Client = require('node-rest-client').Client;
var baseURL = "https://www.skyparse.com/api/hrxml?";
var filePath = "C:\\tmp\\edms.docx";

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
	var client = new Client();

	args = {
		path: {
			"accountID": "13213",
			"secretKey": "test",
			"fileName": "edms.docx"
		},
		data: encodeFile(filePath)
	};

	client.post(baseURL + "accountid=${accountID}&secretkey=${secretKey}&filename=${fileName}", args, function(data, res) {
		/*optional stuff to do after success */
		console.log(data);
	});
}

postCV();

// encodeFile(filePath);