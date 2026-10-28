import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  //check kore nibe jwt_secret ta configure kora ace naki
  const { JWT_SECRET } = ENV;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  //then => go
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //Mili second
    httpOnly: true, //prevent XSS attacks to secure cross-site scripting
    sameSite: "strict", //CSRF attacks to secure
    secure: ENV.NODE_ENV === "development" ? false : true,
  });
  return token;
};

//http://localhost  development server
//https://hostwebsite.com production server and secure
