import { FastifyReply, FastifyRequest } from 'fastify'
import { deleteFruitUseCase } from '../use-cases/deleteFruit.useCase'

type deleteFruitRequest = FastifyRequest<{
  Params: {
    name: string
  }
}>
export async function deleteFruitController(
  request: deleteFruitRequest,
  reply: FastifyReply
): Promise<any> {
  // 1- Extract info from request
  const { name } = request.params

  // 2- Call use-case
  await deleteFruitUseCase({
    fruitDao: request.fruitDao,
    name,
  })

  // 3- API answer
  reply.send({
    message: `${name} well deleted!`,
  })
}
