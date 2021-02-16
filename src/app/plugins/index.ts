import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import helmet from 'fastify-helmet'
import sensible from 'fastify-sensible'
import prisma from './prisma'

const plugin: FastifyPluginAsync = async instance => {
  instance.register(helmet)
  instance.register(sensible, { errorHandler: false })
  instance.register(prisma)

  instance.setErrorHandler((err, _, reply) => {
    console.error(err)
    reply.send(err)
  })
}

export default fp(plugin)
