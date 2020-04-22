const router = require("express").Router();

const Users = require("../data_model.js");

router.get("/", (req, res) => {
  console.log("token", req.decodedToken);

  Users.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
