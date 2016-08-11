'use strict';
const PORT = process.env.HTTP_PORT;
const express = require('express');
const app = express();

app.get('/', onRoot);
app.get('/api/test', apiTest);
app.listen(PORT);
appReady()

function appReady(){
	if (process.env.APP_ENVIRONMENT === "dev"){
		console.log('****************** App Ready');
	}
}

function onRoot(req, res) {
	res.send('BE Hello World!\n');
	console.log("ping");
}

function apiTest(req, res) {
	res.json({msg:"hello world"});
}
