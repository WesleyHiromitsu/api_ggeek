// chamando o arquivo .env
//require('dotenv').config()


// require
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o DB
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});


// iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Models
requireDir("./src/models");

// Rotas
app.use('/api', require('./src/routes'));

//Ligando o servidor na porta 3001
app.listen(process.env.PORT || 3001);
