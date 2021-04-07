const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const errorHandler = require("./handlers/error");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", authRoutes);

app.use((req, res, next) => {
  let error = new Error("Not found!");
  error.status = 400;
  next(error);
});

app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running..");
});
