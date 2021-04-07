const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: String,
  title: String,
  subTitle: String,
  description: String,
  imageURI: String,
  imageCaption: String,
  body: String,
  createdAt: { type: Date, default: Date.now },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);
