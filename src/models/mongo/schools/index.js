/* eslint-disable import/no-extraneous-dependencies */
import { ObjectId } from "mongodb"
import db from "../client.js"

const connect = db

const client = connect.collection("schools")

const SchoolsMongo = {
    

    async findAll() {
        const res = await client.find({}).toArray()
        if (res) return res
        return false
    },

    async findOne(name) {
        const res = await client.findOne({ name: name })
        if (res) return res
        return false
    },

    async createOne(data) {
        try {
            await client.insertOne(data)
            return true
        } catch (e) {
            console.log(e)
            return e
        }
    },


    async update(name, data) {
        try {
            await client.updateOne({ name: name }, { $set: data })
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },

    async delete(id) {
        try {
            const objectId = new ObjectId(id)
            await client.deleteOne({ _id: objectId })
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }
}

export default SchoolsMongo
