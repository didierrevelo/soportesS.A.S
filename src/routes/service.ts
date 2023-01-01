import express from 'express'
import * as services from '../services/services'
import toNewServiceEntry from '../services/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(services.getEntries())
})

router.get('/:id', (req, res) => {
  const service = services.findByID(+req.params.id)
  return (service != null)
    ? res.send(service)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newServices = toNewServiceEntry(req.body)
    const adddedServices = services.addService(newServices)

    res.json(adddedServices)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
