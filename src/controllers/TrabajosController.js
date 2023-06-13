import prisma from '../prismaClient.js'

const getTrabajos = async (req, res) => {
    try {
        const trabajos = await prisma.trabajos.findMany()
        
        if (trabajos.length === 0) {//Este condicional indica que no hay trabajos en la bd
            res.status(400).send("No hay trabajos en la BD")
            }
    else{
        res.json(trabajos)
    }
        
    } catch (error) {
        res.status(400).send("Error al mostrar trabajos")
    }
    
}


//Funcion se encarga de no generar trabajos repetidos
const postTrabajos = async (req,res) => {
    try {
        const {descripcion,sueldo} = req.body
        const existencia = await prisma.trabajos.findFirst({where : {descripcion}})
        if (existencia){
            res.status(400).send("El trabajo entregado ya existe")
        }
        else {
            const trabajos = await prisma.trabajos.create({data :{descripcion,sueldo}})
            res.status(200).send("Trabajo creado correctamente")
        }
    } catch (error) {
        res.status(400).send("No se pudo crear el trabajo")
    }
    
}

//Funcion detecta si el id entregado por parametro existe
const getTrabajo = async (req,res) => {
    try {
        const id = Number(req.params.id)
    const trabajo = await prisma.trabajos.findUnique({where: {id}})
    if(trabajo){
        res.json(trabajo)    
    }
    else{
        res.status(400).send("Id entregado en el parametro no existe")}

    } catch (error) {
        res.status(400).send("No se pudo obtener el trabajo")
    }
}

// Funcion evita que podamos pasar un trabajo ya existente al actualizar.
// Funcion detecta si el id pasado por el parametro existe
const putTrabajo = async(req,res) => {
    try {
        const id = Number(req.params.id)
        const validacion_id = await prisma.trabajos.findUnique({where : {id} })

        if (validacion_id){
            const {descripcion,sueldo} = req.body
            const val_des = await prisma.trabajos.findFirst({where : {descripcion, id : {not : id}}})

            if (val_des){
                res.status(400).send("La descripcion del trabajo entregado ya existe en otra entidad")
                }
            
            else {
                await prisma.trabajos.update({ where: {id} , data: {descripcion, sueldo}})
                res.status(200).send("Usuario actualizado")
                }
        }
        else{
            res.status(400).send("El id entregado en el parametro no es válido")
            }
    } catch (error) {
    res.status(400).send("Error al actualizar el trabajo")
    }
}

// Función detecta si el id entregado por el parametro es valido
const delTrabajo = async(req,res) => {
    try {
        const id = Number(req.params.id)
        const validacion_id = await prisma.trabajos.findUnique({where : {id}})
        if (validacion_id){
            await prisma.trabajos.delete({where: {id}})
            res.status(200).send("Trabajo eliminado correctamenente")     
        }
        else{
            res.status(400).send("El id entregado en el parametro no es válido")
        }
    } catch (error) {
        res.status(400).send("El trabajo pedido no se pudo eliminar")
    }
}




const TrabajosController = {
    getTrabajos,
    postTrabajos,
    getTrabajo,
    putTrabajo,
    delTrabajo
}

export default TrabajosController
