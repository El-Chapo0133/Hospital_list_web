/**
 * NodeJS app
 *
 * Main entry point
 *
 * Author : Loris Levêque
 * Date : 24.01.2020
 * *********************************/

var express		= require('express');
var app 		= express();
var router 		= express.Router();

var api 		= require('./src/api/api.js');
var render 		= require('./src/render/render.js');

var ip 			= require('./src/objects/ip.js');
var port 		= require('./src/objects/port.js');

app.use('/', router);
app.use(express.static(`${__dirname}/_resources/`));

router.use((request, response, next) => {
	console.log(`Time: ${Date.now()}`);
	// middleware
	next();
})
router.get('/', (request, response) => {
	response.writeHead(200, {"Content-Type": "text/html"});

	api.init(() => {
		api.getAllPatients().then((patients) => {
			render.renderFile('_resources/html/index.ejs', {"patients": patients}, (html) => {
				response.write(html);
				response.end();
				api.close();
			});
		});
	});
});
router.post('insert', (request, response) => {
	const new_patient = {
		"title": request.body.title,
		"name": request.body.name,
		"obervations": request.body.observations,
		"dates_entry": request.body.dates_entry,
		"dates_exit": request.body.dates_exit,
		"actions": request.body.actions,
		"requirements": request.body.requirements,
		"then": request.body.then,
		"pharmaceuticals": [["","","","",""]],
		"history": request.body.history,
		"antecedant": request.body.antecedant,
		"allergy": request.body.allergy
	};
	api.init(() => {
		api.insertPatient(new_patients).then(() => {
			api.close();
		});
	});
});
app.listen(port.Local, ip.Local, (err) => {
	if (err)
		throw(err)
	else
		console.log("server started");
});