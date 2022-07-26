module.exports = (sequelize, Sequelize) => {
  const PostModel = sequelize.define("post", {
    userCreated: {
      type: Sequelize.INTEGER,
      unique: true,
      // allowNull: true,
      // references: {
      //   model: "user",
      //   key: "id"
      // }
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