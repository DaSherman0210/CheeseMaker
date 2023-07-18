const usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');


const getUsers = (req,res)=>{
    res.json({
        "message":"Get hello from restserver with POO"
    })
}

const postUsers = async (req,res)=>{
    try {

        

        const {nombre,email,password,imagen,rol} = req.body;
        const user = new usuario({nombre,email,password,imagen,rol});
        
        //todo -- Validator

        const existeEmail = await usuario.findOne({email});
        if (existeEmail) {
            return res.status(400).json({
                msg: "Email is already registered"
            })
        }
        
        //todo -- Encriptar nuestra contraseña

        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password , salt);

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