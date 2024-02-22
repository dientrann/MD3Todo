import express from 'express';
import userApi from './apis/todo.api.js'

const router = express.Router();

router.use('/todo', userApi)

export default router;