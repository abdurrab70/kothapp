import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //Mili second
    httpOnly: true, //prevent XSS attacks to secure cross-site scripting
    sameSite: "strict", //CSRF attacks to secure
    secure: process.env.NODE_ENV === "development" ? false : true,
  });
  return token;
};

//http://localhost  development server
//https://hostwebsite.com production server and secure
