require("dotenv").config();


const express = require("express");
const cors = require("cors");
const app = express();

const path = require('path');

require("./app/routes/tutorial.routes")(app);

//import des routes
const userRoutes = require('./app/routes/user');
const postRoutes = require('./app/routes/post');


var corsOptions = {
  origin: process.env.ORIGINE
};

app.use(express.json());

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to groupomania server application" });
});

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });



const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


// servir le dossier image quand on fait une requete avec /images
app.use('/images', express.static(path.join(__dirname, 'images')));
// pour la routes auth 
app.use('/auth', userRoutes);
// pour la routes post
app.use('/post', postRoutes);



// un écouteur d'évènements est également enregistré
// consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});