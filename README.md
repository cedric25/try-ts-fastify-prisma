# try-ts-fastify-prisma

Some tools I wanted to make work together:
 - TypeScript
 - Fastify
 - Prisma (with a simple `sqlite` file-based DB)

`@prisma/client` imported only once and then injected through to the fastify instance and then to the request. (look for `fruitDao`)
