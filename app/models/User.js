module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      // type: Sequelize.STRING,
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(64),
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return User;
};