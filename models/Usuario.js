const {Schema , model} = require('mongoose');

const usuarioSchema = Schema(
    {
        nombre:{
            type:String,
            required:[true , "Nombre is required"],
            trim:true
        },
        email:{
            type:String,
            required:[true , "Email is required"],
            unique:[true , "The email have to be unique"],
            trim:true
        },
        password:{
            type:String,
            required:[true , "Password is required"],
            trim:true
        },
        imagen:{
            type:String,
            required:[true , "Imagen is required"],
            trim:true
        },
        rol:{
            type:String,
            required:true,
            default: 'USER'
        },
        estado:{
            type:Boolean,
            default:true
        },
        googleSignIn:{
            type:Boolean,
            default:false
        }
    }
);

module.exports = model("usuario",usuarioSchema,"usuario");