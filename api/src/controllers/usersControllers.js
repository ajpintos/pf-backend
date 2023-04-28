const { Users } = require("../db");

const createUser = async ( email , password , firstname , lastname , adress , cp , city , phone ) => {
  const newUser = await Users.findByPk(email);
  if (!newUser) {
      await Users.create({ email , password , firstname ,  lastname , adress , cp , city , phone })
      return "User Created succesfully";
  } else throw Error ("Email already exist");
};

const getAllUsersDB = async () => {
  const allUsers = await Users.findAll();
  if (!allUsers) throw Error ("Did not found users in DB")
  else return allUsers;
}

module.exports = { createUser , getAllUsersDB };
