const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios"
        //* Middlewares
        this.middlewares();
        //*Routing
        this.routes();
    }

    middlewares(){
        //? Cors
        this.app.use(cors());
        //? Public director
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/ususario.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Server corriendo en el puerto ${this.port}`);
        });
    };
}

module.exports = Server; 