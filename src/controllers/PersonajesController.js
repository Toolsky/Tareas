import prisma from '../prismaClient.js'

const postPersonaje = async (req,res) => {
    try {
        const {nombre,fuerza,fecha_nacimiento,objeto} = req.body 
        const personaje = await prisma.personajes.create({
            data: {nombre, fuerza, fecha_nacimiento : new Date(fecha_nacimiento), objeto}
        })
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
        res.status(400).send("No se pudo modificar el personaje (a lo mejor este no existe)")
    }
}

const delPersonaje = async(req,res) => {
    try {
        const id = Number(req.params.id)
        await prisma.personajes.delete({where: {id}})
        res.status(200).send("Eliminaste el personaje")
    } catch (error){
        res.status(400).send("El personaje no se pudo eliminar, a lo mejor nunca existió")
    }
}




const PersonajesController = {
    postPersonaje,
    getPersonaje ,
    getPersonajes,
    putPersonaje,
    delPersonaje
}

export default PersonajesController