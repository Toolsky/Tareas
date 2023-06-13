import prisma from '../prismaClient.js';


//La funcion se encarga de que no se pueden crear dos diplomacias iguales con los reinos invertidos (no tendría sentido).
const postDiplomacia = async (req,res) => {
    try {
        const {id_reino_1,id_reino_2,es_aliado} = req.body
        const reinos_invertidos = await prisma.diplomacias.findUnique({
            where : {id_reino_1_id_reino_2 : {id_reino_1 : id_reino_2,id_reino_2 : id_reino_1}}
        })
        if(reinos_invertidos){
            return res.status(400).send("Entregaste una entidad que ya existe con los reinos invertidos")
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
        res.status(400).send("No se pudieron obtener la diplomacias ")
    }
}

//La funcion es capaz de entregar la diplomacia sin importar el orden de los reinos en el parametro.
const getDiplomacia = async (req,res) => {
    try {
        const id_reino_1 = Number(req.params.id_reino_1)
        const id_reino_2 = Number(req.params.id_reino_2)

        const diplomacia = await prisma.diplomacias.findFirst({
            where: {id_reino_1, id_reino_2}})

        if (diplomacia){    
        res.json(diplomacia)
        }

        else {
        const diplomacia_invertida = await prisma.diplomacias.findFirst({
            where:{id_reino_1 : id_reino_2, id_reino_2 : id_reino_1}})
            res.json(diplomacia_invertida)
        }
    } catch (error) {
        res.status(400).send("Error al obtener la diplomacia")
    }
    
}


//La funcion permite eliminar una diplomacia sin importar el orden en el que se entreguen los reinos.
const delDiplomacia = async (req,res) => {
    try {
        const id_reino_1 = Number(req.params.id_reino_1)
        const id_reino_2 = Number(req.params.id_reino_2)
        await prisma.diplomacias.deleteMany({
            where : {OR : [
                {id_reino_1, id_reino_2},
                {id_reino_1 : id_reino_2, id_reino_2 : id_reino_1}]}})
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
        res.status(400).send("No se pudo modificar la entidad")
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
