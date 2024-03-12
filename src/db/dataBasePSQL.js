

import {sql} from './pSQL' //Importando a minha constante do aquivo psql

import { randomUUID } from "crypto"

export class DatabasePSQL  {
   

   async list(){
        let users

        if(search){
            users =  await sql`SELECT * FROM users WHERE title like "${'%' + search + '%'}"`
        } else {
            users = await sql`SELECT * FROM users`
        }

        return users
    }

    async create(user){
        const userId = randomUUID()
        const {author, title, description} = user
        await sql`INSERT INTO users(id, author, title, description) VALUES(${userId}, ${author}, ${title}, ${description})`
    }

    async update(user, id){
        const {author, title, description, duration} = user
        await sql`UPDATE users SET author = ${author}, title = ${title}, description = ${description}, WHERE id = ${id} `
    }

    async delete(id){
        await sql`DELETE FROM users WHERE id = ${id}`
    }


}