import prisma from '../prismaClient.js'

const getTrabajos = async (req, res) => {
    const trabajos = await prisma.trabajos.findMany()

    res.json(trabajos)
}


const postTrabajos = async (req,res) => {
    const {descripcion,sueldo} = req.body
    const trabajos = await prisma.trabajos.create({
        data :{
            descripcion,
            sueldo
        }
    })
    res.json(trabajos)
}

const getTrabajo = async (req,res) => {
    const {id} = req.params
    const trabajo = await prisma.trabajos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajo)
}

const putTrabajo = async(req,res) => {
    try {
        let _id = Number(req.params.id)
        let {oficio,paga} = req.body
        const update = await prisma.trabajos.update({ where: { id : _id} , data: {descripcion : oficio , sueldo : paga}})
        res.status(200).send("Usuario actualizado de pana")
    } catch (error) {
    res.status(400).send("No se pudo actualizar el trabajo")
    }
}

const removeTrabajo = async(req,res) => {
    try {
        let id = Number(req.params.id)
        await prisma.trabajos.delete({where: {id,}})
        res.status(200).send("Trabajo eliminado correctamenente")    
    } catch (error) {
        res.status(400).send("El trabajo pedido no se pudo eliminar")
        
    }
}




const TrabajosController = {
    getTrabajos,
    postTrabajos,
    getTrabajo,
    putTrabajo,
    removeTrabajo
}

export default TrabajosController
