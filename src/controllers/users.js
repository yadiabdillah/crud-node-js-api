const usersModels = require('../models/users.js');


const getAllUsers = async (req,res)=>{

    try {
        const [data] = await usersModels.getAllUsers();
        res.json({
            msg:'get all success',
            data:data
        });
    } catch (error) {
        res.status(500).json({
            msg:'Server Error',
            serverMessage:error
        })
    }

}

const createNewUser = async (req,res)=>{
    const {body} = req;
    try {
        await usersModels.createNewUser(body);
        res.json({
            msg:"create new user success",
            data:req.body
        });
    } catch (error) {
        res.status(500).json({
            msg:'Server Error',
            serverMessage:error
        })
    }

}

const getSingleUser = (req,res)=>{
    
}
const updateUser = async (req,res)=>{
    const {body} = req
    const {id} = req.params;
    try {
        await usersModels.updateUser(body,id);
        res.json(
            {msg:"update user success",data:req.body}
        );
    } catch (error) {
        res.status(500).json({
            msg:'Server Error',
            serverMessage:error
        })
    }

}

const deleteUser =async (req,res)=>{
    const {id}  = req.params;
    try {
        await usersModels.deleteUser(id);
        res.json({
            msg:"delete successful"
        });

    } catch (error) {
        res.status(500).json({
            msg:'Server Error',
            serverMessage:error
        })
    }
   
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}