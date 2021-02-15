import fastify, { FastifyInstance } from 'fastify'
import plugins from './plugins/index'
import routes from './routes'

export default (): FastifyInstance => {
  const app = fastify({
    // ignoreTrailingSlash: true,
    // disableRequestLogging: true,
    // logger,
    // genReqId,
  })

  app.register(plugins)

  app.get('/', async () => {
    return 'Hello from try-ts-fastify-prisma 👋'
  })

  app.register(routes, { prefix: '/api' })

  return app
}
