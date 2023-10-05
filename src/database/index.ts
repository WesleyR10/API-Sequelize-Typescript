import { Sequelize } from 'sequelize'

const databaseUrl = process.env.DATABASE_URL || '' // Se nao tiver database ele vai ser uma string vazia pois o database poderia ser string ou undefined

const sequelize = new Sequelize(databaseUrl, {
  define: {
    underscored: true //snak_case
  }
})

export { sequelize }