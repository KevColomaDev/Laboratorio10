import { v4 } from 'uuid'
import { testModel } from '../models/models.js'

export const getAllTestController = async (req, res) => {
  try {
    const dataTest = await testModel.getAllTestModel()
    res.status(200).json(dataTest)
  } catch (error) {
    res.status(500).json({ msg: `El error: ${error}` })
  }
}

export const createDataTestController = async (req, res) => {
  try {
    const newDataTest = {
      id: v4(),
      ...req.body
    }
    const result = await testModel.createDataTestModel(newDataTest)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: error })
    console.log(error)
  }
}
