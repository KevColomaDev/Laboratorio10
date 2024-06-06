import { modelHole } from '../models/models.js'

export const getAllHoleController = async (req, res) => {
  try {
    const dataHole = await modelHole.getAllHole()
    res.status(200).json(dataHole)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const createHoleController = async (req, res) => {
  try {
    const newDataHole = {
      ...req.body
    }
    const result = await modelHole.createHole(newDataHole)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: error })
    console.log(error)
  }
}

export const getHoleByIdController = async (req, res) => {
  try {
    const id = req.params.id
    const result = await modelHole.getHoleById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const updateHoleController = async (req, res) => {
  try {
    const id = req.params.id
    const newData = req.body
    const result = await modelHole.updateHole(id, newData)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const deleteHoleController = async (req, res) => {
  try {
    const id = req.params.id
    const result = await modelHole.deleteHole(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
