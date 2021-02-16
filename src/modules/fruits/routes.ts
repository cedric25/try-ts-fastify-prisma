import { FastifyPluginCallback } from 'fastify'
import { Prisma } from '@prisma/client'
import { fetchFruitsRoute, createFruitHandler } from './methods'

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
  // instance.route(createFruitRoute)
  instance.get('/create/:name/:color', createFruitHandler)
}

export default plugin
