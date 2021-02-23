import { Prisma, Fruit } from '@prisma/client'

interface deleteFruitUseCaseParams {
  fruitDao: Prisma.FruitDelegate<any>
  name: string
}
export async function deleteFruitUseCase({
  fruitDao,
  name,
}: deleteFruitUseCaseParams): Promise<Fruit> {
  try {
    return await fruitDao.delete({ where: { name } })
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      // It'd be better to use an enum here...
      // https://github.com/prisma/prisma/issues/5040
      err.code === 'P2025'
    ) {
      throw new Error(`This fruit doesn't exist: ${name}`)
    }
    throw err
  }
}
