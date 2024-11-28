import express from 'express';
import { 
    login, 
    register, 
    getUser, 
    getUserById, 
    deleteUserById, 
    updateUser,
    changepassword
} from '../controller/userController';
import {
    verifyToken
} from '../middleware/jwt'

const route = express.Router();

route.post("/register", register);
route.post('/login', login);
route.get('/details', getUser);
route.get('/detail/:id', getUserById);
route.delete('/delete/:id', deleteUserById);
route.put('/update/:id', updateUser);
route.post('/changePassword',verifyToken, changepassword);

export default route;