import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

declare module 'fastify' {
  interface FastifyInstance {
    fruitDao: PrismaClient['fruit']
  }
}

export const plugin: FastifyPluginAsync = async instance => {
  instance.decorate('fruitDao', prisma.fruit)
}

export default fp(plugin)
