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

const getTrabajador = async (req,res) => {
    try {
        const {id_tra,id_per} = req.params
        const trabajador = await prisma.personaje_tiene_trabajo.findFirst({where:{id_trabajo : Number(id_tra) , id_personaje:Number(id_per)}})
        res.json(trabajador)
    } catch (error) {
        res.status("No se pudo mostrar la entidad, a lo mejor esta no exite")
    }
}

const TrabajadorController = {
    postTrabajador,
    getTrabajador
}

export default TrabajadorController