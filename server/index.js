const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./api/data/swaggerConfig');
const serverConfig = require('./api/data/serverConfig.json');

const categorieRoutes = require('./api/routes/categorieRoutes'); 
const produitRoutes = require('./api/routes/produitRoutes'); 

// initialisations
const app = express();
const swaggerSpec = swaggerJSDoc(swaggerConfig);

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// connexion mongoose
mongoose.Promise = global.Promise;
mongoose.connect(serverConfig.dbConnection, 
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connecté à la base de données.'));

// routes
app.use(categorieRoutes);
app.use(produitRoutes);
app.get('/', (req, res) => res.send('Bienvenue sur le serveur.'));

// demarrage
app.listen(serverConfig.port);
console.log(`RESTful API de gestion de produits à l'écoute sur le port ${serverConfig.port}.`);