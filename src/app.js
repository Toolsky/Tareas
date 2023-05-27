import express from 'express';
import morgan from 'morgan';
import UsersController from './controllers/UsersController.js';
import TrabajosController from './controllers/TrabajosController.js';
import PersonajesController from './controllers/PersonajesController.js';
import TrabajadorController from './controllers/TrabajadorController.js';



const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
app.get('/users', UsersController.getUsers)
app.get('/users/:id', UsersController.getUserById)
app.post('/users', UsersController.createUser)
app.get('/users/:id/posts', UsersController.usersPosts)

app.get("/trabajos", TrabajosController.getTrabajos)
app.post("/trabajos", TrabajosController.postTrabajos)
app.get("/trabajos/:id" , TrabajosController.getTrabajo)
app.put("/trabajos/:id", TrabajosController.putTrabajo)
app.delete("/trabajos/:id", TrabajosController.removeTrabajo)

app.post("/personajes", PersonajesController.postPersonaje)
app.get("/personajes/:id", PersonajesController.getPersonaje)
app.get("/personajes", PersonajesController.getPersonajes)
app.put("/personajes/:id", PersonajesController.putPersonaje)
app.delete("/personajes/:id", PersonajesController.delPersonaje)

app.post("/personaje_tiene_trabajo", TrabajadorController.postTrabajador)
app.get("/personaje_tiene_trabajo/:id_tra/:id_per", TrabajadorController.getTrabajador)

//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})

