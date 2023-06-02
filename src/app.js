import express from 'express';
import morgan from 'morgan';
import TrabajosController from './controllers/TrabajosController.js';
import PersonajesController from './controllers/PersonajesController.js';
import TrabajadorController from './controllers/TrabajadorController.js';
import KartsController from './controllers/KartsController.js';
//import DiplomaciasController from './controllers/DiplomaciasController.js';
import DefensasController from './controllers/DefensasController.js';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)

app.get("/trabajos", TrabajosController.getTrabajos)
app.post("/trabajos", TrabajosController.postTrabajos)
app.get("/trabajos/:id" , TrabajosController.getTrabajo)
app.put("/trabajos/:id", TrabajosController.putTrabajo)
app.delete("/trabajos/:id", TrabajosController.delTrabajo)
/*
app.get("/diplomacias", DiplomaciasController.getDiplomacias)
app.post("/diplomacias", DiplomaciasController.postDiplomacia)
app.get("/diplomacias/:id_r1/:id_r2" , DiplomaciasController.getDiplomacia)
app.put("/diplomacias/:id_r1/:id_r2", DiplomaciasController.putDiplomacia)
app.delete("/diplomacias/:id_r1/:id_r2", DiplomaciasController.delDiplomacia)
*/
app.get("/defensas", DefensasController.getDefensas)
app.post("/defensas", DefensasController.postDefensa)
app.get("/defensas/:id" , DefensasController.getDefensa)
app.put("/defensas/:id", DefensasController.putDefensa)
app.delete("/defensas/:id", DefensasController.delDefensa)

app.post("/personajes", PersonajesController.postPersonaje)
//app.get("/personajes/:id", PersonajesController.getPersonaje)
app.get("/personajes", PersonajesController.getPersonajes)
app.put("/personajes/:id", PersonajesController.putPersonaje)
app.delete("/personajes/:id", PersonajesController.delPersonaje)
app.get("/personajes/:id", PersonajesController.obtenerauto)

app.post("/karts", KartsController.postKarts)
app.get("/karts/:id", KartsController.getKart)
app.get("/karts", KartsController.getKarts)
app.put("/karts/:id", KartsController.putKart)
app.delete("/karts/:id", KartsController.delKart)

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

