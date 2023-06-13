import prisma from '../prismaClient.js'

const postKarts = async (req,res) => {
    try {
        const {modelo, color, velocidad_maxima, id_personaje} = req.body 
        const karts = await prisma.karts.create({
            data: {modelo, color, velocidad_maxima, personajes:{connect : {id:id_personaje}, }}})
        res.json(karts)
        res.status(200).send("Kart creado correctamente")    
    } catch (error) {
        res.status(400).send("No se pudo crear el Kart correctamente")
    }
}

const getKart = async (req,res) => {
    try {
        const id = Number(req.params.id)
        const karts = await prisma.karts.findUnique({
            where: {id}
        })
        res.json(karts)
    } catch (error) {
        res.status(400).send("Error al intentar mostrar el kart deseado")
    } 
}

const getKarts = async(req,res) => {
    try {
        const karts = await prisma.karts.findMany()
        res.json(karts)
    } catch (error) {
        res.status(400).send("Error al mostrar los karts")   
    }
}

const putKart = async(req,res) => {
    try {
        const id = Number(req.params.id)
        const {modelo, color, velocidad_maxima, id_personaje} = req.body
        await prisma.personajes.update({data: {modelo, color, velocidad_maxima, id_personaje}, where: {id}})
        res.status(200).send("Kart actualizado correctamente")
    } catch (error) {
        res.status(400).send("No se pudo modificar el Kart")
    }
}

const delKart = async(req,res) => {
    try {
        const id = Number(req.params.id)
        await prisma.karts.delete({where: {id}})
        res.status(200).send("Eliminaste el kart")
    } catch (error){
        res.status(400).send("El kart no se pudo eliminar")
    }
}

const KartsController = {
    getKart,
    getKarts,
    postKarts,
    delKart,
    putKart,
}

export default KartsController