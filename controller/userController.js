import bcrypt from 'bcrypt';
import User from '../model/userModel.js'
import jwt from 'jsonwebtoken'

export const register= async(req, res)=>{
    try{
        const {name , email, password} = req.body;
        const oldUser = await User.findOne({email: email});
        if(oldUser)
        {
            return res.status(404).json({message: "user already register"})
        }
        
        const hashPass = await bcrypt.hash(password,10);        
        
        const newUser = new User({
            name,
            email,
            password:hashPass
        })
        console.log(newUser)
        await newUser.save();
        return res.status(200).json({message:" new user created " , userData: newUser})
    }
    catch(error)
    {
        console.error(error)
        return res.status(500).json("error while creating  user")
    }
};

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email : email });
        if(!user){
            return res.status(404).json({message: "user not found"})
        }
        const is_match= await bcrypt.compare(password, user.password)
        if(!is_match){
            return res.status(404).json({message:"invalid credentials"})
        }
        const token = await jwt.sign({email: user.email, id : user._id}, 'your_secret_key',{expiresIn: '1h'})
        return res.status(200).json({message : "login success", token: token})
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "error while login "})
    }
}

export const getUser = async(req, res)=>{
    try {
        const userData = await User.find();
        return res.status(200).json({userData: userData})
    } catch (error) {
        console.error(error);
        return res.status(500).json("error while getting user information")
    }
}

export const getUserById= async(req, res)=>{
    try {
        const id= req.params.id
        const userData = await User.findOne({_id: id})
        if(!userData){
            return res.status(404).json({message: "user not found"})
        }
        return res.status(200).json({message: "user Information", userData: userData })
    } catch (error) {
        console.error(error);
        return res.status(500).json('error while getting user information')
    }
}


export const deleteUserById= async(req,res)=>{
    try {
        const id= req.params.id;
        const user= await User.findById({_id: id})
        if(!user){
            return res.status(404).json({message:"user not found "})
        }
        await User.deleteOne({_id: id})
        return res.status(200).json({message: " user deleted successfully "}) 

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "error while deleting user"})
    }
}