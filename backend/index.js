const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");

dotenv.config();

const url = "mongodb://127.0.0.1/ecommerce";

mongoose
  .connect(url)
  .then(() => console.log("DB conectada!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor corriendo OK!! en puerto", process.env.PORT);
});
