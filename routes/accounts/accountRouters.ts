import express from 'express';
import { createAccount } from './controller/accountController';

const router = express.Router();

router.post('/', createAccount)

export default router