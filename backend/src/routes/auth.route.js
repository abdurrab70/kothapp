import express from "express";

const router = express.Router();
router.get("/signup", (req, res) => {
  res.send("Signup, Successfully!");
});
router.get("/login", (req, res) => {
  res.send("Login, Successfully!");
});
router.get("/logout", (req, res) => {
  res.send("Now, you are Log out.");
});

export default router;
