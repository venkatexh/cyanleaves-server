const mongoose = require("mongoose");

const uri =
  "mongodb+srv://venkatesh:Yesmongodb%401710@mycluster.fyzgz.mongodb.net/cyanleaves?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports.User = require("./user");
