// routes d hautentication pour le controleur du  formulaire de connexion
require('dotenv').config()
// pour le cryprtage de mot de passe
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models");
const User = db.user





var passwordValidator = require('password-validator');
// securiser le mot de passe
// on verifie que le mot de passe respecte les conditions
// on verifie que le mot de passe est assez long
// on verifie que le mot de passe contient des majuscules
// on verifie que le mot de passe contient des minuscules
// on verifie que le mot de passe contient des chiffres
// on verifie que le mot de passe contient des caracteres speciaux
const passwordSchema = new passwordValidator();
passwordSchema
  .is().min(8)                                    // Minimum length 8
  .is().max(100)                                  // Maximum length 100
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().digits()                                 // Must have digits
  .has().not().spaces()                           // Should not have spaces
  .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values



// creation de new user dans la base de donnée
// a partir du formulaire de l inscription
exports.signup = (req, res, next) => {
  // verifier que le mot de passe respecte les conditions
  const validation = passwordSchema.validate(req.body.password);
  if (!validation) {
    // si le mot de passe n est pas valide
    // on renvoie un message d erreur
    // console.log('mot de passe non sécurisé')
    // alert('mot de passe non sécurisé')

    return res.status(400).json({ message: "Mot de passe non sécurisé !" })

    // return res.status(400).json({ message: 'Le mot de passe doit respecter les conditions' })
  }

  //verifier email existe pas
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user) {
        // si l email existe deja
        // on renvoie un message d erreur
        // console.log('email existe deja')
        // alert('email existe deja')
        return res.status(400).json({ message: "Email existe déjà !" })
      }
      //verif si username existe pas
      if (req.body.userName) {
        User.findOne({ where: { userName: req.body.userName } })
          .then(user => {
            if (user) {
              // si l username existe deja
              // on renvoie un message d erreur
              // console.log('username existe deja')
              // alert('username existe deja')
              return res.status(400).json({ message: "UserName existe déjà !" })
            }
            // si tout est ok
            else {
              // creation du hash du mdp defini sur 10tours
              bcrypt.hash(req.body.password, 10)
                // on recupere le mdp crypté/ hash du mdp
                .then(hash => {
                  // enregistrement du nouveau user 
                  const user = {
                    email: req.body.email,
                    password: hash,
                    userName: req.body.userName,
                    isAdmin: false
                  };
                  // enregistrement dans la base de donnée
                  User.create(user)
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                    .catch(error => { console.log(error); res.status(400).json({ error }) });
                })
                .catch(error => { console.log(error); res.status(500).json({ error }) });
            };
          })
      }
    })
}

exports.login = (req, res, next) => {
  // que l user correspond a celui envoyé dans la requete 
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      // si on a recuperer un user ou non 
      if (!user) {
        console.log('Utilisateur non trouvé !');
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      console.log(user);
      console.log(req.body.email);
      // on compare le mdp envoyé avec le user recuperer
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            console.log('Mot de passe incorrect !');
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          console.log(user.id);
          res.status(200).json({
            userId: user.id,
            token: jwt.sign(
              { userId: user.id, isAdmin: user.isAdmin, userName: user.userName },
              // clé secrete simple pour dev uniquement
              // pour la production on utilise une clé secrete beaucoup plus longue et plus aleatoire
              `${process.env.SECRETKEY}`,
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => { console.log(error); res.status(500).json({ error }) });
    })
    .catch(error => { console.log(error); res.status(500).json({ error }) });
};


// Delete a User with the specified id in the request
exports.delete = (req, res) => {

  const id = req.params.id;
  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      console.log('bug'); res.status(500).send({ message: "Could not delete User with id=" + id });
    });
}


// update password of a user
exports.update = (req, res) => {
  // verifier que le mot de passe respecte les conditions
  const validation = passwordSchema.validate(req.body.password);
  if (!validation) {
    // si le mot de passe n est pas valide
    // on renvoie un message d erreur
    // console.log('mot de passe non sécurisé')
    // alert('mot de passe non sécurisé')

    return res.status(400).json({ message: "Mot de passe non sécurisé !" })

    // return res.status(400).json({ message: 'Le mot de passe doit respecter les conditions' })
  }
  // creation du hash du mdp defini sur 10tours
  bcrypt.hash(req.body.password, 10)
    // on recupere le mdp crypté/ hash du mdp
    .then(hash => {
      // enregistrement du nouveau user 
      const user = {
        password: hash
      };
      // enregistrement dans la base de donnée
      User.update(user, {
        where: { id: req.params.id }
      })
        .then(() => res.status(201).json({ message: 'Password changed !' }))
        .catch(error => { console.log(error); res.status(400).json({ error }) });
    })
    .catch(error => { console.log(error); res.status(500).json({ error }) });
}

// get one users
exports.getOne = (req, res) => {

  User.findByPk(req.params.id)

    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      res.send(user);
    }
    )
    .catch(err => {
      res.status(500).send({ message: "Error retrieving User with id=" + req.params.id });
    }
    );
}



// // get all users
exports.getAll = (req, res) => {
  User.findAll()
    .then(users => {
      res.send(users);
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    }
    );
}



