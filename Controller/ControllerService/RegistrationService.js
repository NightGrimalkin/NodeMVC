const userService = require("../../Model/ModelService/UserService");

const registerUser = async (req, res) => {
  const user = await userService.createUser(
    {
      login: req.body.login,
      password: req.body.password,
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    },
    { street: req.body.street, city: req.body.city }
  );
  if(user!=-1){
    res.redirect('/login');
  }else{
    res.redirect('/registration');
  }
};

module.exports = {registerUser};