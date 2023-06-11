import prisma from '../prismaClient.js'

const mas_fuertes= async (req,res) => {
    try {
        const mas_fuertes = await prisma.personajes.findMany({
<<<<<<< HEAD
            select: {nombre: true ,fuerza : false},
=======
            select: {nombre: true ,fuerza : true},
>>>>>>> Mati
            orderBy : {fuerza : 'desc'},
            take : 5
        })
        if (mas_fuertes.length > 0){
            res.json(mas_fuertes)
        }
        else {
            res.status(400).send("No hay personajes")
        }
    } catch (error) {
        res.status(400).send("No se pudo encontrar a los personajes más fuertes")
    }
}



<<<<<<< HEAD
const mas_karts = async (req, res) => {
    try {
      const pj = await prisma.personajes.findMany({
        include : {karts:true}
      });
      let pj_maxkarts;
      let contador = 0;
  
      for (const personaje of pj) {
        const cant_karts = personaje.karts.length;
        if (cant_karts > contador) {
          pj_maxkarts = personaje;
          contador = cant_karts;
        }
      }
      const cantidad_karts = pj_maxkarts.karts.length;
      res.json({
        nombre : pj_maxkarts.nombre,
        cantidad_karts : cantidad_karts
      })
    } catch (error) {
      res.status(400).send("Error al obtener el personaje con más karts");
    }
  };



const ApiController = {
    mas_fuertes,
    mas_karts
=======
const ApiController = {
    mas_fuertes
>>>>>>> Mati
}


export default ApiController

