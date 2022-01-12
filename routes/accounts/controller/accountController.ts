import pool from '../../../db/queries';
import { Request, Response} from 'express';
import bcrypt from 'bcryptjs';


const createAccount = async (req: Request, res: Response) => {
        try {
            res.status(200).json({ account: req.body })
        } catch (error) {
            res.status(500).json(error)
        }
    }

export { createAccount }
