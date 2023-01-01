import express from 'express'
import servicesRouter from './routes/service'

const app = express()
app.use(express.json())

const PORT = 8080

app.get('/', (_req, res) => {
  res.send('I am here!')
})

app.use('/api/services', servicesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
