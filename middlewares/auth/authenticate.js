const jwt = require("jsonwebtoken");

// xac nhan dang nhap
const authenticate = (req, res, next) => {
  const  token  = req.header("token");
  const decode = jwt.verify(token, "huu-tinh-0605");
  try {
    if (decode) {

      // gan them thuoc tinh user =decode trong req, de xac nhan loai nguoi dung
       req.user = decode;
       return next();
    } else {
      res.status(401).send("You are not login !");
    }
  } catch (error) {
    res.status(401).send("You are not login !");
  }
};
module.exports={
    authenticate
}