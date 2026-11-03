import express from "express";
import {
  getAllContacts,
  getMessagesByUserId,
  sendMessage,
  getChatPartners,
} from "../controllers/message.controller.js";
import { protectRoute } from "./../middleware/auth.middleware.js";
import { arcjetProtection } from './../middleware/arcjet.middleware.js';

const router = express.Router();

// apply arcjet protection and authentication middleware to all routes in this router
router.use(arcjetProtection, protectRoute);

//get all contacts
router.get("/contacts", getAllContacts);

//chat by individuals id
router.get("/chats", getChatPartners);

//chat by individuals id
router.get("/:id", getMessagesByUserId);

//send message
router.post("/send/:id", sendMessage);

export default router;
