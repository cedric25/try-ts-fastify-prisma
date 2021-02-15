import { FastifyPluginCallback } from 'fastify';
import {
  fetchVegetablesRoute,
} from './methods';

// declare module 'fastify' {
//   interface FastifyRequest {
//     users: UserService;
//   }
// }

const plugin: FastifyPluginCallback = async (instance) => {
  instance.route(fetchVegetablesRoute);
};

export default plugin;
