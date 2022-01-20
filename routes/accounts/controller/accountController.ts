import pool from '../../../db/queries';
import { Request, Response} from 'express';
import bcrypt from 'bcryptjs';


const createAccount = async (req: Request, res: Response) => {
        try {
            const { firstName, lastName, email, password } = req.body
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const newAccount = await pool.query("INSERT INTO account (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)", [ firstName, lastName, email, hashedPassword ])

            res.status(200).json({ 
                newAccount
            })

        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
                error
            })
        }
    }

export { createAccount }
