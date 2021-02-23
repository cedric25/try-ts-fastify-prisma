import { Prisma, Fruit } from '@prisma/client'
import { makeFruitEntity } from '../entities/Fruit.entity'

interface addFruitUseCaseParams {
  fruitDao: Prisma.FruitDelegate<any>
  name: string
  color: string
}
export async function addFruitUseCase({
  fruitDao,
  name,
  color,
}: addFruitUseCaseParams): Promise<Fruit> {
  // 1- Create entity
  const fruitEntity = makeFruitEntity({ name, color })

  // 2- Build entity for db
  const fruitForDb: Prisma.FruitCreateInput = {
    name: fruitEntity.getName(),
    color: fruitEntity.getColor(),
  }

  // 3- Save to db
  try {
    return await fruitDao.create({ data: fruitForDb })

    // --- Q? Return answer from db or return entity?
    // await fruitDao.create({ data: fruitForDb })
    // return fruitEntity
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      // It'd be better to use an enum here...
      // https://github.com/prisma/prisma/issues/5040
      err.code === 'P2002'
    ) {
      throw new Error('This fruit already exist.')
    }
    throw err
  }
}
