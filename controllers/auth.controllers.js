const {response} = require('express');
const Usuario = require('../models/Usuario.js');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/generate.JWS.js');

const login = async (req,res=response) => {
    try {
        const {email,password} = req.body;

        //? Verificar que el correo electronico existe

        const usuario = await Usuario.findOne({email});

        if (!usuario) {
            return res.status(400).json({
                msg: "El usuario no es correcto"
            });
        }

        //? Verificar el estado del usuario

        if (usuario.estado === false) {
            return res.status(400).json({
                msg: "El usuario esta inactivo"
            }) 
        }

        //? Verficar el password 
        const matchPassword = await bcrypt.compare(password , usuario.password);

        if (!matchPassword) {
            return res.status(400).json({
                msg: "No concide la contraseña"
            });
        }

        //? Generacion para validacion JSON WEB TOKEN

        const token = await generateJWT(usuario.id);

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        return res.json({
            res: "Contacte al servicio tecnico"
        })
    }
}

module.exports = {login};