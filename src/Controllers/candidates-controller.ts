import { Request, Response } from 'express'
import { Candidate } from '../models/candidate'
import { where } from 'sequelize'


export const candidatesController = {

  //Metodo que retorna todos os candidatos - GET - /candidates
  index: async (req: Request, res: Response) => {
    try {
      const candidates = await Candidate.findAll()
        return res.json(candidates)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
    }}
  },
  
  // Metodo que insere candidatos - POST - /candidates
  save: async (req: Request, res: Response) => {
    const { name, bio, email, phone, openToWork } = req.body // 

    try {
      const candidate = await Candidate.create({ name, bio, email, phone, openToWork})
        return res.status(201).json(candidate)
  } catch (err) {
      if (err instanceof Error) {
          return res.status(400).json({ message: err.message })
      }
  }},

    // Metodo GET /candidates/:id
    show: async (req: Request, res: Response) => {
      const { id } = req.params // Requisição passada no caso o id

      try {
        const candidate = await Candidate.findByPk(id)
          return res.json(candidate)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }},

     // Metodo para atualizar - PUT - /candidates/:id
    update: async (req: Request, res: Response) => {
      const { id } = req.params // Requisição recebida da pagina ou postegres (do corpo dela)
      const { name, bio, email, phone, openToWork } = req.body // Sao os dados que contem no banco de dados da table que vao ser atualizados e passado pelo user no body
      
      try {
        const candidate = await Candidate.findByPk(id)

        if (candidate === null) { // So tem essa verificação pois o candidate pode retornar null ai no caso isso seria o retorno do null
          return res.status(404).json({ message: 'Candidato não encontrado' })
      }

      candidate.name = name
      candidate.bio = bio
      candidate.email = email
      candidate.phone = phone
      candidate.openToWork = openToWork

      await candidate.save()
      return res.status(200).json(candidate)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }},
  
    // DELETE /candidates/:id
    delete: async (req: Request, res: Response) => {
      const { id } = req.params // Requisição passada no caso o id

      try {
        await Candidate.destroy({where: { id }}) // Excluir onde o nosso id for igual ao id
        return res.status(204).send()
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }},
}


