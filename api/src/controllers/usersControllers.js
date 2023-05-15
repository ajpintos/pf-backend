const { Users } = require("../db");

const createUser = async ( email , password , firstname , lastname , address , cp , city , country , phone ) => {
  const newUser = await Users.findByPk(email);
  if (!newUser) {
      const userType = "common_DB"
      await Users.create({ email , password , firstname ,  lastname , address , cp , city , country , phone , userType })
      return "User Created succesfully";
  } else throw Error ("Email already exist");
};

const loginUser = async ( email , password ) => {
  if (!email || !password) throw Error("Please enter email and password");
  const user = await Users.findByPk(email);
  if (!user) throw Error ("Incorrect email");
  else if (user.password !== password) throw Error ("Incorrect password");
  else return user;
};

const loginUserGoogle = async ( email , firstname , lastname ) => {
  const user = await Users.findByPk(email);
  if (!user) {
    const password = firstname + lastname;
    const userType = "common_Google";
    const newUserGoogle = await Users.create({ email , password , firstname , lastname , userType });
    return newUserGoogle;
  } else return user;
};

const getAllUsersDB = async () => {
    const allUsers = await Users.findAll();
    if (!allUsers) throw Error ("Did not found users in DB");
    else return allUsers;
};

const getUser = async ( email ) => {
  const findUser = await Users.findByPk(email);
  if (!findUser) throw Error("User did not found");
  else return findUser;
}

const updateUserDB = async ( email , password , firstname , lastname , adress , cp , city , phone ) => {
  const userDB = await Users.findByPk(email)
  if (userDB === null) return null;
  await userDB.update({
    password,
    firstname,
    lastname,
    address,
    cp,
    city,
    phone
  });
  await userDB.save();
  return userDB;
};

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
  loginUser,
  loginUserGoogle,
  getAllUsersDB,
  getUser,
  updateUserDB 
};