const express = require("express");
const helmet = require("helmet");
const path = require('path');
const app = express();
const cors = require("cors");

const routes = require('./server/routes/routes.js');

const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/build')));

app.use('/api', routes);

app.listen(PORT, console.log(`Server listening on port ${PORT}...`))