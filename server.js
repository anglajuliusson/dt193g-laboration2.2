// Import the framework and instantiate it
import Fastify from 'fastify'
import { excuteQuery } from './config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

const fastify = Fastify({ logger: true }); 

// GET route för att hämta all data i databasen
fastify.get('/conserts', async (req, reply) => {
    try {
    // Anropar excuteQuery för att skicka SQL till databasen
    // Resultatet returneras som ett Promise och hanteras med await
    let consertsData = await excuteQuery("select * from conserts", []);
    reply.status(200).send(consertsData);
    } catch (err) {
        reply.status(500).send(err);
    }
  });

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}