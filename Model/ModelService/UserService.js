const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./../Models/User");

mongoose.connect("mongodb://localhost:27017/OnlineShop");

const createUser = async (userData, adress) => {
  try {
    userData.password = await bcrypt.hash(userData.password, 10);
    const user = await User.create({
      login: userData.login,
      password: userData.password,
      name: userData.name,
      lastName: userData.lastName,
      adress: adress,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    });
    return true;
  } catch (error) {
    //jakis response
    console.log(error.message);
    return false;
  }
};

const getUser = async (login) => {
  try {
    const user = await User.findOne({ login: login });
    return user;
  } catch (error) {
    console.log(error.message);
    return -1;
  }
};

module.exports = { getUser, createUser };
