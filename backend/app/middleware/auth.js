require('dotenv').config();

// middleware pour les routes qui nécessitent d'être authentifié
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log('testmiddleware');
    // recup le token du header Authorization -- split retourne en tableau le token et le type de token
    const token = req.headers.authorization.split(' ')[1];
    // decoder le token
    const decodedToken = jwt.verify(token, `${process.env.SECRETKEY}`);
    // recuper le userId du token
    const userId = decodedToken.userId;
    console.log(userId);
    // recup le userId de la requete
    req.auth = { userId: userId };
    // recherche de l'utilisateur
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Utilisateur non autorisé !';
    } else {
      //ds la response, on ajoute le userId
      res.locals.userId = userId;

      next();
    }
  } catch (error) {
    {
      console.log(error);
      res.status(401).json({ error: error || 'Requete non authentifiee !' })
    };
  }
}; 