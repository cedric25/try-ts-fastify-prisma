import { FastifyPluginAsync } from 'fastify'
import fruits from '../modules/fruits/routes'

const plugin: FastifyPluginAsync = async instance => {
  instance.register(async instance => {
    instance.register(fruits, { prefix: '/fruits' })

    instance.all('*', async () => {
      throw instance.httpErrors.notFound(`this route doesn't exist`)
    })
  })
}

export default plugin
