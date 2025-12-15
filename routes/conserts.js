import { excuteQuery } from '../config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

// Funktion som hämtar alla konserter från databasen
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

// Funktion som hämtar en specifik konsert baserat på ID
export const getConsertById = async(req, reply) => {
    let id = req.params.id;
    try {
        let consertsData = await excuteQuery("select * from conserts where id=?", [id]);
        reply.status(200).send(consertsData);
    } catch (err) {
        reply.status(500).send(err);
    }
};