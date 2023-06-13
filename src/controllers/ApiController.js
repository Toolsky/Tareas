import prisma from '../prismaClient.js'

const mas_fuertes= async (req,res) => {
    try {
        const mas_fuertes = await prisma.personajes.findMany({
            select: {nombre: true ,fuerza : false},
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



const mas_karts = async (req, res) => {
    try {
      const pj = await prisma.personajes.findMany({
        include: { karts: true },
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
        nombre: pj_maxkarts.nombre,
        cantidad_karts: cantidad_karts,
      });
    } catch (error) {
      res.status(400).send("Error al obtener el personaje con más karts");
    }
  };

const gobernantes = async (req,res) => {
    try {
        const id_gob = await prisma.personaje_habita_reino.findMany({
            where : {es_gobernante : true}, select : {id_personaje : true, id_reino: true}})

        const gob_x_reino = await Promise.all(
            id_gob.map(async (gobernante) => {

                const nombre = await prisma.personajes.findUnique({
                    where: { id: gobernante.id_personaje },
                    select: { nombre: true }})
      
                const reino = await prisma.reinos.findUnique({
                    where: { id: gobernante.id_reino },
                    select: { nombre: true }})

                return { nombre: nombre.nombre, reino: reino.nombre }}))

        res.json(gob_x_reino)

    } catch (error) {
        res.status(400).send("No se puedo encontrar a los gobernantes")
    }
}

const gob_del_reino = async (req,res) => {
    try {
        const id_reino = Number(req.params.id_reino)
        const id_gob_del_reino = await prisma.personaje_habita_reino.findMany({
            where : {es_gobernante : true , id_reino},
            select : {id_personaje : true }})
        
        const nom_gob_del_reino = id_gob_del_reino.map((numero) => numero.id_personaje)
            const nombre_gob = await prisma.personajes.findMany({
                where : {id : {in : nom_gob_del_reino}},
                select : {nombre : true}})  
        res.json(nombre_gob)


    } catch (error) {
        res.status(400).send("Error al buscar los gobernantes del reino")
    }
}

const hab_del_reino = async (req,res) => {
    try {
        const id_reino = Number(req.params.id_reino)
        const hab_reino = await prisma.personaje_habita_reino.count({
            where: {id_reino}
        })
        res.json(hab_reino)
    } catch (error) {
        res.status(400).send("No se pudo encontrar la cantidad de habitantes del reino")
    }
}



const ApiController = {
    mas_fuertes,
    hab_del_reino,
    gobernantes,
    gob_del_reino,
    mas_karts
}


export default ApiController

