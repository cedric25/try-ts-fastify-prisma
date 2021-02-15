import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
// import helmet from 'fastify-helmet';
import sensible from 'fastify-sensible'
// import logger from '@/app/plugins/logger';
// import { Config } from '@/config';
import prisma from './prisma'

const plugin: FastifyPluginAsync = async instance => {
  // instance.register(helmet);
  // instance.register(sensible, { errorHandler: false });
  instance.register(sensible)
  // instance.register(logger);
  // instance.register(georges, options);
  instance.register(prisma)
}

export default fp(plugin)
