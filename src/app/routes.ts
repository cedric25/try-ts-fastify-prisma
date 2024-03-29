import type { FastifyPluginAsync } from 'fastify'
import { fruitRoutes } from '@/modules/fruit/fruit.routes'

const plugin: FastifyPluginAsync = async instance => {
  instance.register(async instance => {
    instance.register(fruitRoutes, { prefix: '/fruits' })
    // Register any other module here
    // instance.register(veggiesRoutes, { prefix: '/veggies' })

    instance.all('*', async () => {
      throw instance.httpErrors.notFound(`this route doesn't exist`)
    })
  })
}

export default plugin
