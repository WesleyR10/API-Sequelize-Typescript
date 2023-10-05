import express from 'express'
import { Candidate } from './models/candidate'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

//Rota que retorna os candidatos
router.get('/candidates', async (req, res) => {
    const candidates = await Candidate.findAll()
    return res.json(candidates)
})

export { router }