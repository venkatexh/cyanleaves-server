const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res, next) => {
  try {
    let user = await db.User.findOne({ email: req.body.email });
    let { id, username } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
        },
        "I LOVE DOGS"
      );
      return res.status(200).json({
        id,
        username,
        token,
      });
    } else {
      return next({
        status: 400,
        message: "Invalid email or password!",
      });
    }
  } catch (err) {
    return next({
      status: 400,
      message: "other error",
    });
  }
};

exports.signup = async (req, res, next) => {
  try {
    let user = await db.User.create(req.body);
    let { id, username } = user;
    let token = jwt.sign(
      {
        id,
        username,
      },
      "I LOVE DOGS"
    );
    return res.status(200).json({
      token,
      id,
      username,
    });
  } catch (err) {
    if (err.Code === 11000) {
      err.message = "Sorry! Username or email already taken.";
    }
    return next({
      status: 400,
      message: err.message,
    });
  }
};
