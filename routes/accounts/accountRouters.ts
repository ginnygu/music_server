import express from 'express';
import { createAccount } from './controller/userController';

const router = express.Router();

router.post('/', createAccount)

export default router