import { Request, Response } from 'express'
import { Job } from '../models'

const jobsController = {
    
    //Metodo que retorna todas as vagas de empregos - GET - /jobs
    index: async (req: Request, res: Response) => {
        try {
            const jobs = await Job.findAll({ include: 'company' }) //Esse include inclui uma assosiação
            return res.json(jobs)
        } catch (err) {
            if (err instanceof Error) {
								return res.status(400).json({ message: err.message })
            }
        }
    }
}

export { jobsController }