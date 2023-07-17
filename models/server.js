const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios"
        //* Conectar con la base de datos
        this.conectarDB();
        //* Middlewares
        this.middlewares();
        //*Routing
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    };

    middlewares(){
        //? Cors
        this.app.use(cors());

        //? Leer y parcear un JSON
        this.app.use(express.json());

        //? Public director
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/ususario.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Server corriendo en el puerto ${this.port}`);
        });
    };
}

module.exports = Server; 