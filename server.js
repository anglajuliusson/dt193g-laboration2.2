// Import the framework and instantiate it
import Fastify from 'fastify'
import { routes } from './routes/consertsRoutes.js'; // Importerar route-funktionerna från consertsRoutes.js
import cors from '@fastify/cors' // Importera cors

const fastify = Fastify({ logger: true }); 

// Aktivera CORS
await fastify.register(cors, {
  origin: '*' // Tillåt alla origins (utveckling)
})

// Registrerar alla routes från routes-filen på Fastify-servern
// Alla endpoints definierade i consertsRoutes.js blir nu tillgängliga
fastify.register(routes);

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
};