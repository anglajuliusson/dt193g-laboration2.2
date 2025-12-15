import { getAllConserts } from './conserts.js'; // Importerar controller-funktionerna från conserts.js

export async function routes(fastify) {
    // Registrerar GET-route och kopplar till controller-funktionen
    fastify.get('/conserts', getAllConserts)
};