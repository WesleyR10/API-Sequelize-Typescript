import express from 'express'
import { candidatesController } from './Controllers/candidates-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))
 
//Rota que retorna todos os candidatos
  router.get('/candidates', candidatesController.index)

export { router }