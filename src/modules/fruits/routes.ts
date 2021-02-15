import { FastifyPluginCallback } from 'fastify'
import { Prisma } from '@prisma/client'
import { fetchFruitsRoute } from './methods'

declare module 'fastify' {
  interface FastifyRequest {
    fruitDao: Prisma.FruitDelegate<any>
  }
}

const plugin: FastifyPluginCallback = async instance => {
  instance.decorateRequest('fruitDao', {})
  instance.addHook('preHandler', async req => {
    req.fruitDao = instance.fruitDao
  })

  instance.route(fetchFruitsRoute)
}

export default plugin
