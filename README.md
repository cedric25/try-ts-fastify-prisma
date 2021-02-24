# try-ts-fastify-prisma

Some tools I wanted to make work together:
 - TypeScript
 - Fastify
 - Prisma (with a simple `sqlite` file-based DB)

`@prisma/client` imported only once and then injected through to the fastify instance and then to the request. (look for `fruitDao`)

## API endpoints

-> Get all fruits:  
`http://127.0.0.1:8080/api/fruits`

-> Create one fruit:  
`http://127.0.0.1:8080/api/fruits/create/ananas/yellow`

-> Delete one fruit:  
`http://127.0.0.1:8080/api/fruits/delete/ananas`
