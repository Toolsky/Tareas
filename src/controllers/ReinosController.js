import prisma from '../prismaClient.js'

const postReino = async (req,res) => {
    try {
        const{nombre,ubicacion,superficie} = req.body
        await prisma.reinos.create({data: {nombre,ubicacion,superficie}})
        res.status(200).send("Reino creado correctamente")
    } catch (error) {
        res.status(400).send("No se pudo crear el reino")
    }
}

const getReinos = async (req,res) => {
    try {
        const reinos = await prisma.reinos.findMany()
        res.json(reinos) 
    } catch (error) {
        res.status("Error al obtener los reinos")
    }
}

const getReino = async (req,res) => {
    try {
        const id = Number(req.params.id)
        const reino = await prisma.reinos.findUnique({where: {id}})
        res.json(reino)
    } catch (error) {
        res.status("Error al obtener el reino")
    }
}

const putReino = async (req,res) => {
    try {
        const id = Number(req.params.id)
        const {nombre,ubicacion,superficie} = req.body
        await prisma.reinos.update({where : {id}, data : {nombre,ubicacion,superficie}})
        res.status(200).send("Reino actualizado correctamente")
        
    } catch (error) {
        res.status(400).send("Error al actualizar el reino")
    }
}

const delReino = async (req,res) => {
    try {
        const id = Number(req.params.id)
        await prisma.reinos.delete({where : {id}})
        res.status(200).send("Reino eliminado correctamente")
    } catch (error) {
        res.status(400).send("Error al eliminar reino")
    }
}



const ReinosController = {
    postReino,
    getReinos,
    getReino,
    putReino,
    delReino
}

export default ReinosController