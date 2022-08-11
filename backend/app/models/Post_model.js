module.exports = (sequelize, Sequelize) => {
  const PostModel = sequelize.define("post", {
    userCreated: {
      type: Sequelize.INTEGER,
    },
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    Image: {
      type: Sequelize.STRING
    },
    likes: {
      type: Sequelize.INTEGER
    }

  });
  return PostModel;
};