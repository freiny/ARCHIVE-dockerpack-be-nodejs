'use strict';

const express = require('express');
const PORT = process.env.HTTP_PORT;

const app = express();
app.get('/', function (req, res) {
  res.send('BE Hello World!\n');
	console.log("ping");
});

app.listen(PORT);

if (process.env.APP_ENVIRONMENT === "dev"){
	console.log('****************** App Ready');
}
