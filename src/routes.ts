import express from 'express'
import { candidatesController } from './Controllers/candidates-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

//Rota que retorna todos os candidatos
  router.get('/candidates', candidatesController.index)
//Rota que retorna um candidato especifico
  router.get('/candidates/:id', candidatesController.show)
//Rota que insere uma informação no banco de dados
  router.post('/candidates', candidatesController.save)
//Rota que atualiza os dados no banco de dados
  router.put('/candidates/:id', candidatesController.update)
//Rota que atualiza os dados no banco de dados
  router.delete('/candidates/:id', candidatesController.delete)
  

export { router }