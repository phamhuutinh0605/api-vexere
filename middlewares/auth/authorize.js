// xac nhan loai nguoi dung (CLIENT-ADMIN)
const authorize = (req, res, next) => {
  // nhan lai thuoc tinh user trong req duoc gui tu authenticate - khi nguoi dung dang nhap thanh cong.
  const { user } = req;
  if (["ADMIN"].findIndex((ele) => ele === user.type) > -1) {
    next();
  }else{
    res.status(403).send("Dang nhap thanh cong duoi dang CLIENT");
  }
};

module.exports={
    authorize
}