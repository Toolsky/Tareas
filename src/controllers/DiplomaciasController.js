import prisma from '../prismaClient.js';

const postDiplomacia = async (req,res) => {
    try {
        const {id_reino_1,id_reino_2,es_aliado} = req.body
        const reinos_invertidos = await prisma.diplomacias.findUnique({
            where : {id_reino_1_id_reino_2 : {id_reino_1 : id_reino_2,id_reino_2 : id_reino_1}}
        })
        if(reinos_invertidos){
            return res.status(400).send("Aweonao deja de entregar una entidad existente")
        }
        await prisma.diplomacias.create({
            data: {
                reino1 : {connect : { id : id_reino_1 }},
                reino2 : {connect : { id : id_reino_2 }},
                es_aliado}})
        res.status(200).send("Diplomacia creada correctamente")
    } catch (error) {
        res.status(400).send("Error al crear la diplomacia")
    }
}


const getDiplomacias = async (req,res) => {
    try {
        const diplomacias = await prisma.diplomacias.findMany()
        res.json(diplomacias)
    } catch (error) {
        res.status(400).send("No se pudo obtener ")
    }
}

const getDiplomacia = async (req,res) => {
    try {
        const id_reino_1 = Number(req.params.id_reino_1)
        const id_reino_2 = Number(req.params.id_reino_2)
        const diplomacia = await prisma.diplomacias.findFirst({
            where: {id_reino_1, id_reino_2}})
        res.json(diplomacia)
    } catch (error) {
        res.status(400).send("Error al obtener la diplomacia, coloca bien los parametros aweonao")
    }
    
}

const delDiplomacia = async (req,res) => {
    try {
        const id_reino_1 = Number(req.params.id_reino_1)
        const id_reino_2 = Number(req.params.id_reino_2)
        await prisma.diplomacias.delete({
            where: {id_reino_1_id_reino_2 : {id_reino_1, id_reino_2}}})
        res.status(200).send("Diplomacia eliminada de pana rey")
    } catch (error) {
        res.status(400).send("No se pudo eliminar la entidad")
    }
}

const putDiplomacia = async (req,res) => {
    try {
        const id_reino_1 = Number(req.params.id_reino_1)
        const id_reino_2 = Number(req.params.id_reino_2)
        const {es_aliado} = req.body
        await prisma.diplomacias.update({
            where: {id_reino_1_id_reino_2 : {id_reino_1,id_reino_2}},
            data : {es_aliado}
        })
        res.status(200).send("Entidad actualizada correctamente")
    } catch (error) {
        res.status(400).send("No se pudo modificar la entidad, entrega las wea de datos bien saco wea")
    }
}


const DiplomaciasController = {
    postDiplomacia,
    getDiplomacias,
    getDiplomacia,
    delDiplomacia,
    putDiplomacia

}


export default DiplomaciasController
