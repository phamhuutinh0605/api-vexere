const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const gravatarUrl=require("gravatar-url")
// thu vien dung token
const jwt=require("jsonwebtoken");

//create user
const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    // cho độ dài mã háo bao nhiêu kí tự-10 kí tự
    const salt = bcryptjs.genSaltSync(10);

    //dat avatar mac dinh khi tao tk moi
    const avatarDefault=gravatarUrl(email);
    // mã hóa password
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
      avatarImage: avatarDefault,
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

//login user
const login=async(req,res)=>{
  const {email,password}=req.body;
  /// tim user bang email
  const user=await User.findOne({
    where:{
      email,
    }
  });
  if(user){
    //kiem tra password
    const isAuth=bcryptjs.compareSync(password,user.password);
    console.log(user.password,isAuth,password);
    if(isAuth){
      // tao ra token sign(_du lieu can ma hoa_, _sescretkey: tu dat_, _exp: thoi gian ton tao token_)
      const token=jwt.sign({email:user.email,password:user.password,type:user.type},"huu-tinh-0605",{expiresIn:60*60})
      // neu pass dung 
      res.status(200).send({message :"Login success!",token});
    }else{
      // neu pass sai
      res.status(500).send("Your password incorrect!!!");
    }
  }else{
    //email ko ton tai
    res.status(404).send("Email is exist!!!");
  }
}

const uploadAvatar=async(req,res)=>{
  const {user}=req;
  const {path}=req.file;
  const userFound=await User.findOne({
    where:{
      email:user.email,
    }
  });
    userFound.avatarImage=`http://localhost:3000/${path}`;
    await userFound.save();
    res.send(userFound);
}

module.exports = {
  register,
  login,
  uploadAvatar
};
