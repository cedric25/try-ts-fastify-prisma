import app from './app/app'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function run() {
  const allFruits = await prisma.fruit.findMany()
  console.log('allFruits', allFruits)

  try {
    await prisma.fruit.create({
      data: {
        name: 'lemon',
        color: 'yellow',
      },
    })
  } catch (err) {
    // https://www.prisma.io/docs/reference/api-reference/error-reference
    console.error('[prisma.fruit.create]', err)
  }

  const now = await prisma.fruit.findMany()
  console.log('now', now)
}

run()

const server = app()

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
