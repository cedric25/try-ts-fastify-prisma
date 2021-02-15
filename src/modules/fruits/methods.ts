import { FastifyRequest, RouteOptions } from 'fastify'

// export function fetchFruitsRoute(instance: FastifyInstance) {
//   return {
//     method: 'GET',
//     url: '/',
//     handler() {
//       return instance.fruit.findMany()
//     },
//   }
// }

export const fetchFruitsRoute: RouteOptions = {
  method: 'GET',
  url: '/',
  handler(req: FastifyRequest) {
    return req.fruitDao.findMany()
  },
}
