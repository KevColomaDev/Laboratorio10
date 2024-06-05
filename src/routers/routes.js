import { Router } from 'express'
import { createHoleController, getAllHoleController, getHoleByIdController, deleteHoleController, updateHoleController } from '../controllers/controllers.js'

export const router = Router()

router.get('/data', getAllHoleController)
router.post('/data', createHoleController)
router.get('/data/:id', getHoleByIdController)
router.delete('/data/:id', deleteHoleController)
router.put('/data/:id', updateHoleController)
