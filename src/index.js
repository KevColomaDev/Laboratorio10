import { app } from './server.js'

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
