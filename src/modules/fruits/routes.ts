import { FastifyPluginCallback } from 'fastify'
import { fetchFruitsRoute } from './methods'

// declare module 'fastify' {
//   interface FastifyRequest {
//     users: UserService;
//   }
// }

const plugin: FastifyPluginCallback = async instance => {
  instance.route(fetchFruitsRoute)
}

export default plugin
