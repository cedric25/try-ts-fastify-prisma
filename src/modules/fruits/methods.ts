import { FastifyRequest, RouteOptions } from 'fastify'
import { Prisma } from '@prisma/client'

export const fetchFruitsRoute: RouteOptions = {
  method: 'GET',
  url: '/',
  handler(req: FastifyRequest) {
    return req.fruitDao.findMany()
  },
}

/**
 * Didn't find a way to keep the previous code:
 * export const createFruitRoute: RouteOptions = {
 *   method: 'GET',
 *   url: '/create/:name/:color',
 *   handler(req: FastifyRequest) { ... }
 * }
 * TS complaining about the type of 'handler'...
 */

/**
 * Try json-schema-to-typescript
 * (https://www.fastify.io/docs/latest/TypeScript/)
 */

type CustomRequest = FastifyRequest<{
  Params: {
    name: string
    color: string
  }
}>
export function createFruitHandler(request: CustomRequest) {
  console.log('req.query', request.params)
  const { name, color } = request.params
  const fruit: Prisma.FruitCreateInput = { name, color }
  return request.fruitDao.create({ data: fruit })
}
