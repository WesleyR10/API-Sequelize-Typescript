import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json()) // Metodo para entender o json passado no posteman

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Started!')
})
