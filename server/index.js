const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Importa el módulo 'path'
const userController = require('./controller/userController');
const axios = require ('axios');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Ruta para guardar un usuario
app.post('/guardar-usuario', userController.guardarUsuario);

//app.get('/usuariosRegistrados.json', (req, res) => {
    //res.sendFile(path.join(__dirname, 'src', 'componentes', 'usuariosRegistrados.json'));
//});

app.get("/", (req, res) => {
    const config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/664e46ceacd3cb34a84c03ed',
        headers: {
            'Content-Type': 'application/json',
            "X-Master-Key": "$2a$10$PLov23c3...xY8I0zkrro.brO2CK1hWD2lnJF9NasahuStHiVXXFC"
        }
    };

    axios(config)
        .then(result => {
            res.send(result.data.record);
            // Si result.data.record no es correcto, puedes enviar solo result.data o ajustar según la estructura del JSON recibido.
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('');
        });
});
// Aquí debes agregar el método `registrarUsuario` al controlador y registrar la ruta '/registro'

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
