module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      // type: Sequelize.STRING,
      type: Sequelize.TEXT,
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
      unique: true,
      defaultValue: false
    }
  });
  return User;
};