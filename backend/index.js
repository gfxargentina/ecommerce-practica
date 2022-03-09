const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = "mongodb://127.0.0.1/ecommerce";

mongoose
  .connect(url)
  .then(() => console.log("DB conectada!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor corriendo OK!!");
});
