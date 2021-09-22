const express = require("express");
const router = express.Router();
const { Users } = require("../models/");
const bcrpyt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/Authentication");

// logic for registration
router.post("/", async (req, res) => {
  const { username, password, gender, birthday, height, weight, targetWeight } =
    req.body;
  bcrpyt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      gender: gender,
      birthday: birthday,
      height: height,
      weight: weight,
      targetWeight: targetWeight,
    });
    res.json("SUCCESS");
  });
});

// logic for login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) res.json({ error: "User not found" });

  bcrpyt.compare(password, user.password).then((pwMatch) => {
    if (!pwMatch)
      res.json({ error: "Incorrect Username or Password Combination" });

    // grabs username from user const
    const accessToken = sign(
      { username: user.username, id: user.id },
      "3X2xOjbneC"
    );

    res.json(accessToken);
  });
});

// checks if user is authenticated
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
