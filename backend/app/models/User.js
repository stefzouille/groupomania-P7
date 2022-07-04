module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(64),
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      unique: false,
      defaultValue: false
    }
  });
  return User;
};