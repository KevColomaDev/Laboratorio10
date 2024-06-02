import e from 'express'
import { router } from './routers/routes.js'

export const app = e()

// Middlewares
app.use(e.json())

// Routes
app.use('/api/v1/', router)
