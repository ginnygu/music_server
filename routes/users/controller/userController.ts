import pool from '../../../db/queries';
import { Request, Response} from 'express'


const createUser = async (req: Request, res: Response) => {
        try {
            res.status(200).json({body: req.body})
        } catch (error) {
            res.status(500).json(error)
        }
    }

export { createUser }
