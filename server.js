// Import the framework and instantiate it
import Fastify from 'fastify'
import { excuteQuery } from './config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

const fastify = Fastify({ logger: true }); 

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
});

// Route som testar anslutningen till MySQL-databasen
fastify.get('/dbtest', async () => {

    // Anropar excuteQuery för att skicka SQL till databasen
    // Resultatet returneras som ett Promise och hanteras med await
    const result = await excuteQuery("SELECT NOW()");

    // Returnerar resultatet från databasen som JSON
    return { tid: result };
  });

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}