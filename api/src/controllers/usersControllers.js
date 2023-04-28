const { Users } = require("../db");

const postCreateUser = async (req, res) => {
  const { email, password, firstname, lastname, phone } = req.body;
  try {
    const result = await Users.create({
      email,
      password,
      firstname,
      lastname,
      phone,
    });
    if (result) res.status(201).send("exito al crear usuario");
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = { postCreateUser};
