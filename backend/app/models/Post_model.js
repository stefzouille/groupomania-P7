module.exports = (sequelize, Sequelize) => {
  const PostModel = sequelize.define("post", {
    userCreated: {
      type: Sequelize.INTEGER,
      unique: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
  });
  return PostModel;
};