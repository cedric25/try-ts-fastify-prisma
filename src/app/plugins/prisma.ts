import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

declare module 'fastify' {
  interface FastifyInstance {
    fruitDao: Prisma.FruitDelegate<any>
  }
}

export const plugin: FastifyPluginAsync = async instance => {
  instance.decorate('fruitDao', prisma.fruit)
}

export default fp(plugin)
