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



const HabitanteController = {
    postHabitante

}

export default HabitanteController
