import express from 'express';
import { login, register, getUser, getUserById, deleteUserById } from '../controller/userController';

const route = express.Router();

route.post("/register", register);
route.post('/login', login);
route.get('/details', getUser)
route.get('/detail/:id', getUserById)
route.delete('/delete/:id',deleteUserById)

export default route;