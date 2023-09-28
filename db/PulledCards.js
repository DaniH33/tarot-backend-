import { DataTypes } from "sequelize";

const PulledCards = (db) => {
    return db.define("pulledCards", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        cardID1: DataTypes.INTEGER,
        cardID2: DataTypes.INTEGER,
        cardID3: DataTypes.INTEGER,
    });
};

export default PulledCards;
