import Sequelize from "sequelize";
import CardModel from "./Card.js";
import PulledCardsModel from "./PulledCards.js";

let databaseUrl = "postgres://hacktheplanet@localhost:5432/tarot";
if (process.env.DATABASE_URL) {
    databaseUrl = process.env.DATABASE_URL;
}
const db = new Sequelize(databaseUrl);

const Card = CardModel(db);
const PulledCards = PulledCardsModel(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("DB Connected");

        PulledCards.belongsTo(Card, { as: "card1", foreignKey: "cardID1" });
        PulledCards.belongsTo(Card, { as: "card2", foreignKey: "cardID2" });
        PulledCards.belongsTo(Card, { as: "card3", foreignKey: "cardID3" });

        db.sync(); //false
    } catch (error) {
        console.error(error);
        console.error("DB Shit the bed");
    }
};

connectToDB();

export { db, Card, PulledCards };
