import prisma from '../prismaClient.js'

const postPersonaje = async (req,res) => {
    try {
        const {nombre,fuerza,fecha_nacimiento,objeto} = req.body 
        const personaje = await prisma.personajes.create({
            data: {nombre, fuerza, fecha_nacimiento : new Date(fecha_nacimiento), objeto}
        })
        res.json(personaje)
        res.status(200).send("Personaje creado correctamente")    
    } catch (error) {
        res.status(400).send("No se pudo crear el personaje correctamente")
    }
}

const getPersonaje = async (req,res) => {
    try {
        const id = Number(req.params.id)
        const personaje = await prisma.personajes.findUnique({
            where: {id}
        })
        res.json(personaje)
    } catch (error) {
        res.status(400).send("Error al intentar mostrar el personaje deseado")
    } 
}

async function obtenerauto(id_personaje) {
    const personajes = await prisma.personajes.findUnique({
      where: { id: id_personaje},
      include: { karts: true }
    });
  
    if (personajes?.karts) {
      return personajes.karts;
    } else {
      return null; // No se encontró un automóvil relacionado
    }
  }

const getPersonajes = async(req,res) => {
    try {
        const personajes = await prisma.personajes.findMany()
        res.json(personajes)
    } catch (error) {
        res.status(400).send("Error al mostrar los personajes")   
    }
}

const putPersonaje = async(req,res) => {
    try {
        const id = Number(req.params.id)
        const {nombre,fuerza,fecha_nacimiento,objeto} = req.body
        await prisma.personajes.update({data: {nombre,fuerza,fecha_nacimiento: new Date(fecha_nacimiento),objeto}, where: {id}})
        res.status(200).send("Personaje actualizado correctamente")
    } catch (error) {
        res.status(400).send("No se pudo modificar el personaje wachito (a lo mejor este no existe)")
    }
}

const delPersonaje = async(req,res) => {
    try {
        const id = Number(req.params.id)
        await prisma.personajes.delete({where: {id}})
        res.status(200).send("Te piteaste al loco ¿que te hizo él? :(")
    } catch (error){
        res.status(400).send("El personaje no se pudo eliminar, a lo mejor nunca existió")
    }
}




const PersonajesController = {
    postPersonaje,
    getPersonaje ,
    getPersonajes,
    putPersonaje,
    delPersonaje,
    obtenerauto
}

export default PersonajesController