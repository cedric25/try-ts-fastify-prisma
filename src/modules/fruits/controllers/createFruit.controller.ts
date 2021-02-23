import { FastifyReply, FastifyRequest } from 'fastify'
import { addFruitUseCase } from '../use-cases/addFruit.useCase'

type CreateFruitRequest = FastifyRequest<{
  Params: {
    name: string
    color: string
  }
}>
export async function createFruitController(
  request: CreateFruitRequest,
  reply: FastifyReply
): Promise<void> {
  // 1- Extract info from request
  const { name, color } = request.params

  // 2- Call use-case
  const createdDbFruit = await addFruitUseCase({
    fruitDao: request.fruitDao,
    name,
    color,
  })

  // 3- API answer
  reply.status(201).send({
    message: `${createdDbFruit.name} well added!`,
  })
}
