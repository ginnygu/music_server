import express from "express";
import {
	createAccount,
	getAccounts,
	getAccount,
} from "./controller/accountControllers";

const router = express.Router();

router.get("/all", getAccounts);
router.post("/signup", createAccount);
router.post("/login", getAccount);

export default router;
