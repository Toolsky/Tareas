import prisma from '../prismaClient.js'

const postTrabajador = async (req,res) => {
    try {
        const {id_trabajo,id_personaje,fecha_inicio,fecha_termino} = req.body
        const trabajador = await prisma.personaje_tiene_trabajo.create({
            data :{
                idtrabajo: {connect : {id : id_trabajo}},
                idpersonaje : {connect : {id : id_personaje}},                  
                fecha_inicio : new Date(fecha_inicio),
                fecha_termino : new Date(fecha_termino)
            }   
        })
        res.json(trabajador)
    } catch (error) {
        res.status(400).send("No se pudo crear el trabajador, asegurate que los IDs existan")   
    }
}


const getTrabajadores = async (req,res) => {
    try {
        const trabajadores = await prisma.personaje_tiene_trabajo.findMany()
        res.json(trabajadores)
    } catch (error) {
        res.status(400).send("Error al mostrar los personajes")
        
    }
}

const getTrabajador = async (req,res) => {
    try {
        const {id_tra,id_per} = req.params
        const trabajador = await prisma.personaje_tiene_trabajo.findFirst({where:{id_trabajo : Number(id_tra) , id_personaje:Number(id_per)}})
        res.json(trabajador)
    } catch (error) {
        res.status("No se pudo mostrar la entidad, a lo mejor esta no existe")
    }
}


const putTrabajador = async (req,res) => {
    try {
        const {id_tra,id_per} = req.params
        const {fecha_inicio,fecha_termino} = req.body
        await prisma.personaje_tiene_trabajo.update({
            where: {id_trabajo_id_personaje : {id_trabajo : Number(id_tra), id_personaje : Number(id_per)}},
            data:{fecha_inicio : new Date(fecha_inicio), fecha_termino : new Date(fecha_termino)}})
        res.status(200).send("Trabajador actualizado de pana")
    }catch(error){
        res.status(400).send("El trabajador no se pudo,quizas no existe")
    }
}

const delTrabajador = async (req,res) => {
    try {
        const {id_tra,id_per} = req.params
        await prisma.personaje_tiene_trabajo.delete({
            where: {id_trabajo_id_personaje : {
                id_trabajo : Number(id_tra),
                id_personaje : Number(id_per)}}})
        res.status(200).send("Trabajador eliminado correctamente")    
    } catch (error) {
        res.status(400).send("El trabajador no se pudo eliminar")
    }
}

const TrabajadorController = {
    postTrabajador,
    getTrabajadores,
    getTrabajador,
    putTrabajador,
    delTrabajador
}

export default TrabajadorController