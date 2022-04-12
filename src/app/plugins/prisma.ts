import plugin from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'

// 1- Instantiate Prisma client only once
const prismaClient = new PrismaClient()

declare module 'fastify' {
  interface FastifyInstance {
    db: PrismaClient
  }
}

export default plugin(async instance => {
  // 2- Decorate fastify instance with a reference to this prismaClient
  instance.decorate('db', prismaClient)
})
