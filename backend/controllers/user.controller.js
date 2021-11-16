const axios = require("axios");

// Retrieve all Users from the placeholder API
exports.findUserPosts = (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${req.body.id}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
exports.findAllUsers = (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
