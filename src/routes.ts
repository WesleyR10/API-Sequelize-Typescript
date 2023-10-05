import express from 'express'
import { candidatesController } from './Controllers/candidates-controller'
import { companiesController } from './Controllers/companies-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

  // Todas as rotas de candidates
  router.get('/candidates', candidatesController.index) //Rota que retorna todos os candidatos
  router.get('/candidates/:id', candidatesController.show) //Rota que retorna um candidato especifico
  router.post('/candidates', candidatesController.save) //Rota que insere uma informação no banco de dados
  router.put('/candidates/:id', candidatesController.update) //Rota que atualiza os dados no banco de dados
  router.delete('/candidates/:id', candidatesController.delete) //Rota que atualiza os dados no banco de dados
  
  // Todas as rotas de companies
  router.get('/companies', companiesController.index)


export { router }