import { randomUUID } from "crypto"

export class DatabaseMemmory  {
    #users = new Map()

    list(){
        return Array.from(this.#users.entries()).map((userArray) => {
            const id = userArray[0]
            const dataUser = userArray[1]

            return {
                id,
                ...dataUser
            }
        })
    }

    create(user){
        const idVideos = randomUUID()
        this.#users.set(idVideos, user)
    }

    update(user, id){
        this.#users.set(id, user)
    }

    delete(id){
        this.#users.delete(id)
    }


}