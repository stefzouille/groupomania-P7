const mongoose = require('mongoose');

// unique validator pour verifier que le nom n existe pas deja
// améliore les messages d'erreur lors de l'enregistrement de données uniques
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);