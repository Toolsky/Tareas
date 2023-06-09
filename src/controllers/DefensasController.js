import prisma from '../prismaClient.js'

const postDefensa = async (req,res) => {
    try {
        const{defensa} = req.body
        await prisma.defensas.create({data: {defensa}})
        res.status(200).send("Defensa creada correctamente")
    } catch (error) {
        res.status(400).send("No se pudo crear la defensa")
    }
}

const getDefensas = async (req,res) => {
    try {
        const defensas = await prisma.defensas.findMany()
        res.json(defensas) 
    } catch (error) {
        res.status("Error al obtener las defensas")
    }
}

const getDefensa = async (req,res) => {
    try {
        const id = Number(req.params.id)
        const defensa = await prisma.defensas.findUnique({where: {id}})
        res.json(defensa)
    } catch (error) {
        res.status("Error al obtener la defensa")
    }
}

const putDefensa = async (req,res) => {
    try {
        const id = Number(req.params.id)
        const {defensa} = req.body
        await prisma.defensas.update({
            where : {id}, 
            data : {defensa}})
        res.status(200).send("Defensa actualizada correctamente")
        
    } catch (error) {
        res.status(400).send("Error al actualizar la defensa")
    }
}

const delDefensa = async (req,res) => {
    try {
        const id = Number(req.params.id)
        await prisma.defensas.delete({where : {id}})
        res.status(200).send("Defensa eliminada correctamente")
    } catch (error) {
        res.status(400).send("Error al eliminar defensa")
    }
}



const DefensasController = {
    postDefensa,
    getDefensa ,
    getDefensas,
    putDefensa,
    delDefensa
}

export default DefensasController