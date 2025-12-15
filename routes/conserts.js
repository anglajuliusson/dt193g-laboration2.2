import { excuteQuery } from '../config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

export const getAllConserts = async(req, reply) => {
    try {
        // Anropar excuteQuery för att skicka SQL till databasen
        // Resultatet returneras som ett Promise och hanteras med await
        let consertsData = await excuteQuery("select * from conserts", []);
        reply.status(200).send(consertsData);
    } catch (err) {
        reply.status(500).send(err);
    }
};