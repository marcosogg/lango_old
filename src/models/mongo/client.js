import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const mongourl = `mongodb+srv://${process.env.MONGODB}:${process.env.MONGOPWD}@${process.env.MONGOURL}`

const mongoClient =  new MongoClient(mongourl)

const db = mongoClient.db("lango")

export default db


