import { MongoClient } from 'mongodb'
import { config } from 'dotenv'

config()
const uri = process.env.MONGO_URI

export const client = new MongoClient(uri, {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true
  },
  tls: true
})

export const connect = async () => {
  try {
    await client.connect()
    await client.db('Laboratorio10').command({ ping: 1 })
    console.log('Database connected')
  } catch (error) {
    console.log(error)
  }
}
