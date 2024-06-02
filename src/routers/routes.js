import { Router } from 'express'
import { createDataTestController, getAllTestController } from '../controllers/controllers.js'

export const router = Router()

router.get('/data', getAllTestController)
router.post('/data', createDataTestController)
