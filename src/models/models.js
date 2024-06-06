import { client, connect } from '../database.js'
import { ObjectId } from 'mongodb'
export const modelHole = {
  async getAllHole () {
    await connect()
    const collection = client.db('Laboratorio10').collection('Holes')
    const peticion = await collection.find({}).toArray()
    return peticion
  },

  async createHole (newData) {
    await connect()
    const collection = client.db('Laboratorio10').collection('Holes')
    const peticion = await collection.insertOne(newData)
    const result = await collection.findOne({ _id: peticion.insertedId })
    return { peticion, result }
  },

  async deleteHole (id) {
    await connect()
    const collection = client.db('Laboratorio10').collection('Holes')
    id = new ObjectId(id)
    const peticion = await collection.deleteOne({ _id: id })
    return peticion
  },

  async updateHole (id, newData) {
    await connect()
    const collection = client.db('Laboratorio10').collection('Holes')
    id = new ObjectId(id)
    const peticion = await collection.updateOne({ _id: id }, { $set: newData })
    const result = await collection.findOne({ _id: id })
    return { peticion, result }
  },

  async getHoleById (id) {
    await connect()
    const collection = client.db('Laboratorio10').collection('Holes')
    id = new ObjectId(id)
    const peticion = await collection.findOne({ _id: id })
    return peticion
  }
}
