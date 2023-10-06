import { Candidate } from './candidate'
import { Company } from './company'
import { Job } from './job'


Company.hasMany(Job) // Empresa tem muitas vagas
Job.belongsTo(Company)

export {
    Candidate,
    Company,
    Job
}