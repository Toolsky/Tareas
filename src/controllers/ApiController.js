import prisma from '../prismaClient.js'

const mas_fuertes= async (req,res) => {
    try {
        const mas_fuertes = await prisma.personajes.findMany({
            select: {nombre: true ,fuerza : true},
            orderBy : {fuerza : 'desc'},
            take : 5
        })
        if (mas_fuertes.length > 0){
            res.json(mas_fuertes)
        }
        else {
            res.status(400).send("No hay personajes")
        }
    } catch (error) {
        res.status(400).send("No se pudo encontrar a los personajes más fuertes")
    }
}



const ApiController = {
    mas_fuertes
}


export default ApiController

