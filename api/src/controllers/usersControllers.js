const { Users } = require("../db");

const createUser = async ( email , password , firstname , lastname , address , cp , city , country , phone ) => {
  const newUser = await Users.findByPk(email);
  if (!newUser) {
      await Users.create({ email , password , firstname ,  lastname , address , cp , city , country , phone })
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

const updateUserDB = async ( email , password , firstname , lastname , adress , cp , city , phone ) => {
  const userDB = await Users.findByPk(email)
  if (userDB === null) return null;
  await userDB.update({
    password,
    firstname,
    lastname,
    adress,
    cp,
    city,
    phone
  });
  userDB.save();
  return userDB;
};

const loginUser = async ( email , password ) => {
  if (!email || !password) throw Error("Please enter email and password");
  const user = await Users.findByPk(email);
  if (!user) throw Error ("Email did not found");
  else if (user.password !== password) throw Error ("Incorrect password");
  else return user;
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

module.exports = { 
  createUser, 
  getAllUsersDB, 
  getUserDB, 
  loginUser,
  updateUserDB 
};

// exports.logout = (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.status(500).json({ message: 'No se pudo cerrar la sesión' });
//     }

//     res.clearCookie('connect.sid');
//     res.json({ message: 'Sesión cerrada exitosamente' });
//   });
// };

