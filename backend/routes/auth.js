const User = require("../models/User");
const CryptoJS = require("crypto-js");

const router = require("express").Router();

//REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log(req.body.password, req.body.username);
    const user = await User.findOne({ username: req.body.username });
    //si no existe el usuario
    !user ?? res.status(401).json("Wrong Credentials!!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const passwordDecrypt = hashedPassword.toString(CryptoJS.enc.Utf8);

    //si password no es igual a req... devuelve el error
    passwordDecrypt !== req.body.password &&
      res.status(401).json("Wrong Credentials");

    //desestructura el user para que no mande el password en la respuesta
    //si no le pones el .doc trae todos los datos de mongodb
    const { password, ...others } = user._doc;

    //si todo sale ok retorna
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
