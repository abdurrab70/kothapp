import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection);

//check just as a user funny route😁😂🤣
router.get("/test", (req, res) => {
  res.status(200).json({ message: "You are a bot ok..." });
});
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

//if user refresh their page and check user login kora cilo kina

router.get("/check", protectRoute, (req, res) =>
  res.status(200).json(req.user),
);

export default router;
