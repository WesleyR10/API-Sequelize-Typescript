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
    },

  // Metodo que insere companies - POST - /jobs
  save: async (req: Request, res: Response) => {
    const { title, description, limitDate, companyId} = req.body // 

    try {
    const job = await Job.create({ title, description, limitDate, companyId,})
        return res.status(201).json(job)
} catch (err) {
    if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
    }
}},

// Metodo GET /jobs/:id
show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const job = await Job.findByPk(id, { include: 'company' }) // Retornava so a vaga - Includes retorna as informações da empresa 
        return res.json(job)
    } catch (err) {
        if (err instanceof Error) {
    return res.status(400).json({ message: err.message })
        }
    }
},

// Metodo para atualizar - PUT - /jobs/:id
update: async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, description, limitDate, companyId } = req.body

    try {
        const [affectedRows, jobs] = await Job.update({ // Metodo update do sequelize - primeiro os valores para att
          title, description, limitDate, companyId
        }, { // Segundo passar as opções 
            where: { id },
            returning: true // Somente para o postgres - retorna as linhas afetadas - affectedRows nem foi utilizado
        })

        return res.json(jobs[0])
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
        await Job.destroy({
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

export { jobsController }