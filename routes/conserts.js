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

// Funktion som lägger till ny konsert
export const addConsert = async(req, reply) => {
    try {
        const { artist, seen } = req.body;
            
            // Validering: kolla att artist är en icke-tom sträng
            if (!artist || typeof artist !== 'string' || artist.trim() === '') {
                return reply.status(400).send({ error: "Artist måste fyllas i korrekt." });
            }

            // Validering: kolla att seen är boolean
            if (typeof seen !== 'boolean') {
                return reply.status(400).send({ error: "Seen måste vara true eller false." });
            }

        // SQL-fråga för att lägga till konsert
        let consertsData = await excuteQuery("insert into conserts(artist, seen) values(?, ?)",
            [
                artist, 
                seen
            ]
        );
        reply.status(201).send({ message: "Konsert tillagd!", consertsData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som raderar en specifik konsert baserat på ID
export const deleteConsertById = async(req, reply) => {
    let id = req.params.id;
    try {
        let consertsData = await excuteQuery("delete from conserts where id=?", [id]);
        reply.status(200).send(consertsData);
    } catch (err) {
        reply.status(500).send(err);
    }
};