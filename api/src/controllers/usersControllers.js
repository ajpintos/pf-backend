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

const getUserDB = async (userEmail) => {
  const user = await Users.findByPk(userEmail);
  if (user) return user;
  else throw Error ("User did not found");
}

// const getUserOrdersDB = async (userEmail) => {
//   const user = await Users.findByPk(userEmail, {
//     include: {
//       model: Orders
//     }
//   });
//   if (!user) throw Error ("User does not exist");
//   else return user;
// }

module.exports = { createUser , getAllUsersDB , getUserDB };
