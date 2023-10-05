import { Request, Response } from 'express'
import { Candidate } from '../models/candidate'

//Rota que retorna todos os candidatos
export const candidatesController = {
  index: async (req: Request, res: Response) => {
    const candidates = await Candidate.findAll()
    return res.json(candidates)
  }
}


