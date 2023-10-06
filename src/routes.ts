import express from 'express'
import { candidatesController } from './Controllers/candidates-controller'
import { companiesController } from './Controllers/companies-controller'
import { jobsController } from './Controllers/jobs-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

  // Todas as rotas de candidates
  router.get('/candidates', candidatesController.index) //Rota que retorna todos os candidatos
  router.get('/candidates/:id', candidatesController.show) //Rota que retorna um candidato especifico
  router.post('/candidates', candidatesController.save) //Rota que insere uma informação no banco de dados
  router.put('/candidates/:id', candidatesController.update) //Rota que atualiza os dados no banco de dados
  router.delete('/candidates/:id', candidatesController.delete) //Rota que deleta um candidato do banco de dados
  
  // Todas as rotas de companies
  router.get('/companies', companiesController.index) //Rota que retorna todos as empresas
  router.get('/companies/:id', companiesController.show) //Rota que retorna uma empresa especifica
  router.post('/companies', companiesController.save) //Rota que insere uma informação no banco de dados
  router.put('/companies/:id', companiesController.update) //Rota que atualiza os dados de uma company
  router.delete('/companies/:id', companiesController.delete) //Rota que deleta uma company do banco de dados

  // Todas as rotas de jobs
  router.get('/jobs', jobsController.index) //Rota que retorna todos as vagas de emprego
  router.get('/jobs/:id', jobsController.show) //Rota que retorna uma vaga de emprego especifica
  router.post('/jobs', jobsController.save) //Rota que insere uma informação de vaga de emprego
  router.put('/jobs/:id', jobsController.update) //Rota que atualiza os dados de uma vaga de emprego
  router.delete('/jobs/:id', jobsController.delete) //Rota que deleta uma vaga de emprego do banco de dados


export { router }