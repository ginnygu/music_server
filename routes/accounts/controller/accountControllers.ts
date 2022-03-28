import pool from "../../../db/queries";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const createAccount = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newAccount = await pool.query(
			"INSERT INTO account (first_name, last_name, email, hashedpw) VALUES ($1, $2, $3, $4)",
			[firstName, lastName, email, hashedPassword]
		);
		const savedData = newAccount.rows;
		res.status(200).json({
			savedData,
		});
	} catch (error) {
		res.status(500).json({
			message: "Something went wrong",
			error,
		});
	}
};

const getAccounts = async (req: Request, res: Response) => {
	try {
		const getAccounts = await pool.query("SELECT email FROM account");
		const results = getAccounts.rows;
		res.status(200).json({
			results,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error",
			error,
		});
	}
};

const getAccount = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const getAccount = await pool.query(
			"SELECT * FROM account WHERE email = $1",
			[email]
		);
		const result = getAccount.rows[0];
		if (!result) throw { message: "User not found" };
		const comparePw = await bcrypt.compare(password, result.hashedpw);
		if (!comparePw) throw { message: "Email and password do not match" };
		res.status(200).json({
			result,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Error",
			error: error.message,
		});
	}
};

export { createAccount, getAccounts, getAccount };
