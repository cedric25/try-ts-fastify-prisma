# try-ts-fastify-prisma

Some tools I wanted to make work together:
 - TypeScript
 - Fastify
 - Prisma (with a simple `sqlite` file-based DB)

## API endpoints

-> Get all fruits:  
`http://127.0.0.1:8080/api/fruits`

You should get:
```json
{
  "fruits": [
    {
      "name": "lemon",
      "color": "yellow"
    },
    {
      "name": "kiwi",
      "color": "green"
    }
  ]
}
```

-> Add a red raspberry:  
`http://127.0.0.1:8080/api/fruits/create/raspberry/red`

-> Delete the raspberry:  
`http://127.0.0.1:8080/api/fruits/delete/raspberry`

## What's to remember

👉 `@prisma/client` is imported only once, then gets injected to the fastify instance and then through to the request.

## Some info

### import alias

I've got an alias pointing to src/ folder.  
tsconfig.json:
`"paths": { "@/*": ["src/*" ] },`

👉 To make it work when running the compiled JS:  
`npm i module-alias`  
Then import it at the top of your server entry file (`server.ts` for us): `import 'module-alias/register'`

### source-map-support

> In case of an error and when clicking on the guilty file, my IDE brings me to the `dist/` folder -> 😒

👉 `npm i source-map-support -D`
+ Register it in your package.json dev script: `-r source-map-support/register`

## To Do

- Add pino
