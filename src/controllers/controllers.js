import { validateHole, validateUpdateHole } from '../config/schema.js'
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
    const newDataHole = validateHole(req.body)
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
    if (result !== null) {
      res.status(200).json(result)
    } else {
      res.status(404).json({ msg: 'Hole not found' })
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ msg: 'Hole not found' })
    } else {
      res.status(500).json({ msg: error })
    }
  }
}

export const updateHoleController = async (req, res) => {
  try {
    const id = req.params.id
    const newData = validateUpdateHole(req.body)
    const result = await modelHole.updateHole(id, newData)
    res.status(200).json(result)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ msg: error.issues })
    } else {
      res.status(500).json({ msg: error })
    }
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
