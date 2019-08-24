// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var http = require('http'); 
const express = require('express')
const bodyParser = require('body-parser')
const port = 8968;
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

function log(str)
{
	document.getElementById("cons").innerHTML += `
	<div>
		${str}
	</div>
	`;
}
/*
http.createServer(function (req, res) {
	log(`Got ${req.method} request.`);
	let body = []
	req.on('data', chunk => {
		body.push(chunk)
	  })
	  req.on('end', () => {
		body = Buffer.concat(body).toString();
		var ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(":").pop();
		log(`Got data from ${ip}`);
		//var r = JSON.parse(body);
		var r = body;
		switch (r['cmd'])
		{
			case 'ping':
				log(`Client ${ip} online.`);
				res.write('PONG'); //write a response to the client
				//res.end(); //end the response
				break;
		}
		
	  })
	res.end()
}).listen(8968); //the server object listens on port 8080 
*/
app.post('/', (req, res) => {
	const { cmd } = req.body;
	log(`${req.ip} requested req.body`);
	res.status(200).send()
 /*
  if (username && password) {
    res.send('OK'); // ALL GOOD
  } else {
    //res.status(400).send('You need to provide Username & password'); // BAD REQUEST 
  }
  */
});
app.listen(port, '0.0.0.0', () => log(`Server listening on port ${port}!`))
log("Initialized.");
