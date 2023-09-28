import express from "express";
import cors from "cors";
import { Card } from "./db/db.js";
import { Sequelize } from "sequelize";
import { PulledCards } from "./db/db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({ server: "online" });
});

server.get("/randomCards", async (req, res) => {
    const randomCards = await Card.findAll({
        order: Sequelize.literal("random()"),
        limit: 3,
    });
    res.send(randomCards);
});

server.post("/pulledCards", async (req, res) => {
    // Save the pulled cards to the database

    await PulledCards.create(req.body);

    // Return a success response
    res.status(200).send();
});

server.get("/readings", async (req, res) => {
    res.send({
        readings: await PulledCards.findAll({
            include: ["card1", "card2", "card3"],
        }),
    });
});

server.get("/readings/:id", async (req, res) => {
    res.send({
        reading: await PulledCards.findOne({
            where: { id: req.params.id },
            include: ["card1", "card2", "card3"],
        }),
    });
});

server.listen(3011, () => {
    console.log("Server online at port 3011");
});
