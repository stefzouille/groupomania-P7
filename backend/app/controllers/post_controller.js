// creation des posts dans la base de donnée
const { user } = require("../models");
const db = require("../models");
const Post = db.post;

// const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Post
  const postData = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    userCreated: res.locals.userId
  };
  // verifier si le post existe deja
  Post.findOne({
    where: {
      title: req.body.title
    }
  }).then(post => {
    if (post) {
      res.status(400).send({
        message: "Post already exists!"
      });
      return;
    } else {
      // Save Post in the database
      Post.create(postData)
        // userCreated avec id de l'utilisateur connecté
        // .then(data => {
        //   res.send(data = user.findByPk(req.body.userCreated));

        // })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log(err);
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Post."
          });
        });
    };
  }
  );
}


// Retrieve all Posts from the database.
exports.getAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Post.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving post."
      });
    });
};


// Find a single Post with an id
exports.getOne = (req, res) => {
  const id = req.params.id;
  Post.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};


// Update a Post by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Post.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
};


// Delete a Post with the specified id in the request
exports.deleteOne = (req, res) => {
  const id = req.params.id;
  Post.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Could not delete Post with id=" + id
      });
    });
};


// Delete all Post from the database.
exports.deleteAll = (req, res) => {
  Post.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Post were deleted successfully!` });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Posts."
      });
    });
};


// Find all published Posts
exports.getAllPublished = (req, res) => {
  Post.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
};