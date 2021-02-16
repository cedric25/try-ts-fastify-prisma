import { FastifyRequest, RouteOptions } from 'fastify'
import { Prisma } from '@prisma/client'

export const fetchFruitsRoute: RouteOptions = {
  method: 'GET',
  url: '/',
  handler(req: FastifyRequest) {
    return req.fruitDao.findMany()
  },
}

export const createFruitRoute: RouteOptions = {
  method: 'GET',
  url: '/create-kiwi',
  handler(req: FastifyRequest) {
    const fruit: Prisma.FruitCreateInput = { name: 'kiwi', color: 'green' }
    return req.fruitDao.create({ data: fruit })
  },
}
