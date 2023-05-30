const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        // Directorio Público
        this.app.use( express.static('public') );

    }
    routes() {
       this.app.get('/',(req, res) => {
        res.send('Hello World')
    });
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;