import { getAllConserts, getConsertById } from './conserts.js'; // Importerar controller-funktionerna från conserts.js

export async function routes(fastify) {
    // Registrerar GET-route och kopplar till controller-funktionen
    fastify.get('/conserts', getAllConserts); // Route för att hämta alla konserter
    fastify.get('/conserts/:id', getConsertById); // Route för att hämta en konsert med specifikt id
};