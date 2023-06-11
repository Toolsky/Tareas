import prisma from '../prismaClient.js'


const postDefensa_entre_reinos = async (req,res) => {
    try {
        const{defensas_id,reinos_id} = req.body
        const Defensa_entre_reinoss = await prisma.defensas_entre_reinos.create({
            data:{defensas_id,reinos_id}})
        res.json(Defensa_entre_reinoss)
        res.status(200).send("Defensa asociada a reino creada")
    } catch (error) {
        res.status(400).send("Error al asignar defensa")        
    }
}


const getDefensas_entre_reinos = async (req,res) => {
    try {
        const defensa_de_reino = await prisma.defensas_entre_reinos.findMany()
        res.json(defensa_de_reino)
    } catch (error) {
        res.status(400).send("Error al obtener las entidades")
    }
}


const delDefensa_de_reino = async(req,res) => {
    try {
        const defensas_id = Number(req.params.defensas_id)
        const reinos_id = Number(req.params.reinos_id)
        await prisma.defensas_entre_reinos.delete({
            where: {defensas_id_reinos_id : {defensas_id : Number(defensas_id) , reinos_id : Number(reinos_id)}}})
        res.status(200).send("Defensa eliminada correctamente")
    } catch (error) {
        res.status(400).send("Error al eliminar defensa")
    }
}

const putDefensa_entre_reinos = async(req,res) => {
    try {
        const defensas_id = Number(req.params.defensas_id)
        const reinos_id = Number(req.params.reinos_id)
        await prisma.defensas_entre_reinos.update({
            where : {defensas_id_reinos_id : {defensas_id : Number(defensas_id),reinos_id : Number(reinos_id)}}})
        res.status(200).send("Defensa actualizada correctamente")        
    } catch (error) {
        res.status(400).send("No se pudo actualizar la defensa")
    }
}

const getDefensa_entre_reinos = async(req,res) => {
    try {
        const defensas_id = Number(req.params.defensas_id)
        const reinos_id = Number(req.params.reinos_id)
        const defensa_reino = await prisma.defensas_entre_reinos.findUnique({
            where : {defensas_id_reinos_id : {defensas_id : defensas_id,
                reinos_id : reinos_id}}})
        res.json(defensa_reino)
    } catch (error) {
        res.status(400).send("No se pudo obtener la defensa y el reino")
    }
}



const DefensaInReinos = {
    postDefensa_entre_reinos,
    getDefensa_entre_reinos,
    getDefensas_entre_reinos,
    putDefensa_entre_reinos,
    delDefensa_de_reino
}

export default DefensaInReinos

