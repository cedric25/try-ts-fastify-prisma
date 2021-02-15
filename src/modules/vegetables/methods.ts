// import { FastifyRequest, RouteOptions } from 'fastify';
import { RouteOptions } from 'fastify'

export const fetchVegetablesRoute: RouteOptions = {
  method: 'GET',
  url: '/',
  // schema: {
  //   params: {
  //     type: 'object',
  //     required: ['userId'],
  //     properties: {
  //       userId: {
  //         type: 'string',
  //       },
  //     },
  //   },
  // },
  // handler(request: FastifyRequest) {
  handler() {
    // const { db } = request;
    // return db.vegetables.findMany();
    return Promise.resolve([
      {
        name: 'Carrot',
        color: 'orange',
      },
    ])
  },
}
