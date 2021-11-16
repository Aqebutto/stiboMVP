module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const router = require("express").Router();

  // Retrieve all users
  router.get("/", users.findAllUsers);
  // Retrieve all posts by user id
  router.post("/posts", users.findUserPosts);

  app.use("/api/users", router);
};
