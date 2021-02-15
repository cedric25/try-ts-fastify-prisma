import { FastifyPluginAsync } from 'fastify'
import fruits from '../modules/fruits/routes'
import routeErrorHandler from './errorHandler'

const plugin: FastifyPluginAsync = async instance => {
  instance.register(async instance => {
    // we add a custom error handler for routes to make sure we can forward Georges errors
    instance.setErrorHandler(routeErrorHandler)

    instance.register(fruits, { prefix: '/fruits' })

    instance.all('*', async () => {
      throw instance.httpErrors.notFound(`this route doesn't exist`)
    })
  })
}

export default plugin
