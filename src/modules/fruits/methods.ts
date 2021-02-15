// import { FastifyRequest, RouteOptions } from 'fastify';
import { RouteOptions } from 'fastify'

export const fetchFruitsRoute: RouteOptions = {
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
    // return db.fruits.findMany();
    return Promise.resolve([
      {
        name: 'banana',
        color: 'yellow',
      },
    ])
  },
}
