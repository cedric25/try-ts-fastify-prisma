import { FastifyError, FastifyReply } from 'fastify';

export default errorHandler;

async function errorHandler(error: FastifyError): Promise<FastifyReply> {
  console.log('Oops')
  console.log(error);
  throw error;
}
