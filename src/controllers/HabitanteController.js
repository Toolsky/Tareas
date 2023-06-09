import prisma from '../prismaClient.js'

const postHabitante = async (req,res) => {
    try {
        const{id_personaje,id_reino,fecha_registro,es_gobernante} = req.body
        await prisma.personaje_habita_reino.create({
            data:{
            idpersonaje_reino : {connect : {id : id_personaje}},
            reino_personaje : {connect : {id : id_reino}},
            fecha_registro: new Date(fecha_registro),
            es_gobernante}})
        res.status(200).send("Habitante creado")
    } catch (error) {
        res.status(400).send("Error al crear habitante")        
    }
}

const getHabitantes = async (req,res) => {
    try {
        const habitantes = await prisma.personaje_habita_reino.findMany()
        res.json(habitantes)
    } catch (error) {
        res.status(400).send("Error al obtener las entidades")
    }
}

const delHabitante = async(req,res) => {
    try {
        const id_personaje = Number(req.params.id_personaje)
        const id_reino = Number(req.params.id_reino)
        await prisma.personaje_habita_reino.delete({
            where: {id_personaje_id_reino : {id_personaje , id_reino}}})
        res.status(200).send("Habitante eliminado correctamente")
    } catch (error) {
        res.status(400).send("Error al eliminar habitante")
    }
}

const putHabitante = async(req,res) => {
    try {
        const id_personaje = Number(req.params.id_personaje)
        const id_reino = Number(req.params.id_reino)
        const {fecha_registro,es_gobernante} = req.body
        await prisma.personaje_habita_reino.update({
            where : {id_personaje_id_reino : {id_personaje,id_reino}}, 
            data : {
                fecha_registro : new Date(fecha_registro),
                es_gobernante}})
        res.status(200).send("Habitante actualizado correctamente")        
    } catch (error) {
        res.status(400).send("No se pudo actualizar el habitante")
    }
}

const getHabitante = async(req,res) => {
    try {
        const id_personaje = Number(req.params.id_personaje)
        const id_reino = Number(req.params.id_reino)
        const habitante = await prisma.personaje_habita_reino.findUnique({where : {id_personaje_id_reino : {id_personaje,id_reino}}})
        res.json(habitante)
    } catch (error) {
        res.status(400).send("No se pudo obtener el habitante")
    }
}



const HabitanteController = {
    postHabitante,
    getHabitantes,
    delHabitante,
    putHabitante,
    getHabitante
}

export default HabitanteController
