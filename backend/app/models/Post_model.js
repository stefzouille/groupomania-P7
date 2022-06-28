module.exports = (sequelize, Sequelize) => {
  const PostModel = sequelize.define("post", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return PostModel;
};