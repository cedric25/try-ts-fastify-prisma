import { Fruit } from '@prisma/client'
import { FastifyRequest } from 'fastify'

export function readFruitsController(request: FastifyRequest): Promise<Fruit[]> {
  // Probably better to go through a use-case here!
  return request.fruitDao.findMany()
}
