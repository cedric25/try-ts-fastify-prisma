import { FastifyPluginCallback } from 'fastify'
import { Prisma } from '@prisma/client'
import {
  readFruitsController,
  createFruitController,
} from './controllers/fruitsControllers'

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

  instance.get('/', readFruitsController)

  // 'GET' here to ease tests directly from browser
  instance.get('/create/:name/:color', createFruitController)
}

export default plugin
