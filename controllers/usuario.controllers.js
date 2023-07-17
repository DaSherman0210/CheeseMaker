const usuario = require('../models/Usuario.js')

const getUsers = (req,res)=>{
    res.json({
        "message":"Get hello from restserver with POO"
    })
}

const postUsers = async (req,res)=>{
    try {
        const body = req.body;
        const user = new usuario(body);
        await user.save();
        res.json({
        "message":"Post hello from restserver with POO",
        user
    })    
    } catch (error) {
        console.log(error);
    }           
}

const deleteUsers = (req,res)=>{
    res.json({
        "message":"Delete hello from restserver with POO"
    })            
}

const putUsers = (req,res)=>{
    res.json({
        "message":"Put hello from restserver with POO"
    })            
}

const patchUsers = (req,res)=>{
    res.json({
        "message":"Patch hello from restserver with POO"
    })            
}

module.exports = {getUsers,postUsers,deleteUsers,putUsers,patchUsers};