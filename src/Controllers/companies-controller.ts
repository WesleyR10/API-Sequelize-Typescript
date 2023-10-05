import { Request, Response } from 'express'
import { Company } from '../models/company'

const companiesController = {
    
  //Metodo que retorna todas as empresas - GET - /companies
    index: async (req: Request, res: Response) => {
        try {
            const companies = await Company.findAll()
            return res.json(companies)
        } catch (err) {
            if (err instanceof Error) {
								return res.status(400).json({ message: err.message })
            }
        }
    }
}

export { companiesController }