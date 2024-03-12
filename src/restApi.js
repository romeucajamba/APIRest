import fastify from "fastify";
//import { DatabaseMemmory } from "./db/memmory.js";
import { DatabasePSQL } from "./db/dataBasePSQL";
import { title } from "process";

const dbPostgres = new DatabasePSQL()

const server = fastify({
    logger: true
})

//Minhas rotas
server.get('/', function myUrl(req, reply){
    reply.send('Bem-Vindo ao Fastify')
})

server.get('/users', async function myUrl(req, reply){
    const users = await dbPostgres.list()
    console.log(users)
    return users
})



server.post('/users', async function myUrl(req, reply){
    const {author, title, description} = req.body
    
   await dbPostgres.create({
        //shortSintaxe
        author,
        title,
        description
    })

    console.log(dataBase.list())

    return reply.status(201).send()
})

server.put('/users/:id', async function myUrl(req, reply){
    const usersId = req.params.id
    const {author, title, description} = req.body

   await dbPostgres.update(usersId, {
        author,
        title,
        description
    })

    return reply.status(204).send()
})

server.delete('/users/:id', async function myUrl(req, reply){
   
    const userId = req.params.id

   await dbPostgres.delete(userId)
   
    return reply.status(204).send()
})


server.listen({port:3000})