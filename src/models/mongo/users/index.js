import db from "../client.js"

const connect = db

const client = connect.collection("users")

const UserMongo = {

    async findAll() {
        const res = await client.find({}).toArray()
        if (res) return res
        return false
    },

   
    async getUserByEmail(email) {
        const res = await client.findOne({ email: email })
        if (res) return res
        return false
    },

    async addUser(data) {
        try {
            await client.insertOne(data)
            return true
        } catch (e) {
            console.log(e)
            return e
        }
    },


    async update(email, data) {
        try {
            await client.updateOne({ email: email }, { $set: data })
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },

    async delete(email) {
        try {
            await client.deleteOne({ email: email })
            return true
        } catch (e) {
            console.log(e)
            return false
        }

    }

}

export default UserMongo