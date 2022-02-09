import plugin from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

declare module 'fastify' {
  interface FastifyInstance {
    db: PrismaClient
  }
}

export default plugin(async instance => {
  instance.decorate('db', prismaClient)
})
