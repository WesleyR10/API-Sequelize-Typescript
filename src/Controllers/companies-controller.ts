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
    },

  // Metodo que insere companies - POST - /companies
    save: async (req: Request, res: Response) => {
        const { name, bio, website ,email} = req.body // 

        try {
        const company = await Company.create({ name, bio, website ,email,})
            return res.status(201).json(company)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }},

  // Metodo GET /companies/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const company = await Company.findByPk(id)
            return res.json(company)
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message })
            }
        }
    },

  // Metodo para atualizar - PUT - /companies/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, bio, website, email } = req.body

        try {
            const [affectedRows, companies] = await Company.update({ // Metodo update do sequelize - primeiro os valores para att
                name,
                bio,
                website,
                email,
            }, { // Segundo passar as opções 
                where: { id },
                returning: true // Somente para o postgres - retorna as linhas afetadas
            })
    
            return res.json(companies[0])
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message })
            }
        }
    },

  // DELETE /companies/:id
    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await Company.destroy({
                where: { id }
            })
    
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
				return res.status(400).json({ message: err.message })
            }
        }
    }
}

export { companiesController }