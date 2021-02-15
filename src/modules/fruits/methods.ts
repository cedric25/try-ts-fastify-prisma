import { FastifyRequest, RouteOptions } from 'fastify'

export const fetchFruitsRoute: RouteOptions = {
  method: 'GET',
  url: '/',
  handler(req: FastifyRequest) {
    return req.fruitDao.findMany()
  },
}
