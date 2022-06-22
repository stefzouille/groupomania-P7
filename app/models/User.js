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
      // validate: {
      //   is: /^[0-9a-f]{64}$/i
      // }
    }
    // password: {
    //   type: Sequelize.STRING
    // }
  });
  return User;
};