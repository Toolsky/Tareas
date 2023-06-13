import express from 'express';
import morgan from 'morgan';
import TrabajosController from './controllers/TrabajosController.js';
import PersonajesController from './controllers/PersonajesController.js';
import TrabajadorController from './controllers/TrabajadorController.js';
import KartsController from './controllers/KartsController.js';
import DefensasController from './controllers/DefensasController.js';
import ReinosController from './controllers/ReinosController.js';
import HabitanteController from './controllers/HabitanteController.js';
import DiplomaciasController from './controllers/DiplomaciasController.js';
import ApiController from './controllers/ApiController.js';
<<<<<<< HEAD
=======
import DefensaInReinos from './controllers/DefensaInReinos.js';
>>>>>>> ola

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)

app.get("/defensainreinos", DefensaInReinos.getDefensas_entre_reinos)
app.get("/defensainreinos/:defensas_id/:reinos_id",DefensaInReinos.getDefensa_entre_reinos)
app.post("/defensainreinos",DefensaInReinos.postDefensa_entre_reinos)
app.put("/defensainreinos/:defensas_id/:reinos_id",DefensaInReinos.putDefensa_entre_reinos)
app.delete("/defensainreinos/:defensas_id/:reinos_id",DefensaInReinos.delDefensa_de_reino)

app.get("/trabajos", TrabajosController.getTrabajos)
app.post("/trabajos", TrabajosController.postTrabajos)
app.get("/trabajos/:id" , TrabajosController.getTrabajo)
app.put("/trabajos/:id", TrabajosController.putTrabajo)
app.delete("/trabajos/:id", TrabajosController.delTrabajo)

app.get("/defensas", DefensasController.getDefensas)
app.post("/defensas", DefensasController.postDefensa)
app.get("/defensas/:id" , DefensasController.getDefensa)
app.put("/defensas/:id", DefensasController.putDefensa)
app.delete("/defensas/:id", DefensasController.delDefensa)

app.post("/personajes", PersonajesController.postPersonaje)
app.get("/personajes/:id", PersonajesController.getPersonaje)
app.get("/personajes", PersonajesController.getPersonajes)
app.put("/personajes/:id", PersonajesController.putPersonaje)
app.delete("/personajes/:id", PersonajesController.delPersonaje)


app.post("/karts", KartsController.postKarts)
app.get("/karts/:id", KartsController.getKart)
app.get("/karts", KartsController.getKarts)
app.put("/karts/:id", KartsController.putKart)
app.delete("/karts/:id", KartsController.delKart)

app.post("/personaje_tiene_trabajo", TrabajadorController.postTrabajador)
app.get("/personaje_tiene_trabajo/:id_tra/:id_per", TrabajadorController.getTrabajador)
app.get("/personaje_tiene_trabajo", TrabajadorController.getTrabajadores)
app.put("/personaje_tiene_trabajo/:id_tra/:id_per", TrabajadorController.putTrabajador)
app.delete("/personaje_tiene_trabajo/:id_tra/:id_per", TrabajadorController.delTrabajador)

app.post("/reinos", ReinosController.postReino)
app.get("/reinos", ReinosController.getReinos)
app.get("/reinos/:id", ReinosController.getReino)
app.put("/reinos/:id", ReinosController.putReino)
app.delete("/reinos/:id", ReinosController.delReino)


app.post("/personaje_habita_reino" , HabitanteController.postHabitante)
app.get("/personaje_habita_reino" , HabitanteController.getHabitantes)
app.delete("/personaje_habita_reino/:id_personaje/:id_reino", HabitanteController.delHabitante)
app.put("/personaje_habita_reino/:id_personaje/:id_reino", HabitanteController.putHabitante)
app.get("/personaje_habita_reino/:id_personaje/:id_reino", HabitanteController.getHabitante)

app.post("/diplomacias", DiplomaciasController.postDiplomacia)
app.get("/diplomacias", DiplomaciasController.getDiplomacias)
app.get("/diplomacias/:id_reino_1/:id_reino_2", DiplomaciasController.getDiplomacia)
app.delete("/diplomacias/:id_reino_1/:id_reino_2", DiplomaciasController.delDiplomacia)
app.put("/diplomacias/:id_reino_1/:id_reino_2", DiplomaciasController.putDiplomacia)

app.get("/api/top5personajesConMasFuerza", ApiController.mas_fuertes)
app.get("/api/cantidadHabitantes/:id_reino", ApiController.hab_del_reino)
app.get("/api/gobernante", ApiController.gobernantes)
app.get("/api/gobernante/:id_reino", ApiController.gob_del_reino)

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

