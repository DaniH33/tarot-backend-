import { DataTypes } from "sequelize";

const Card = (db) => {
    return db.define("card", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        type: DataTypes.STRING,
        name_short: DataTypes.STRING,
        name: DataTypes.STRING,
        value: DataTypes.STRING,
        value_int: DataTypes.INTEGER,
        meaning_up: DataTypes.TEXT,
        meaning_rev: DataTypes.TEXT,
        desc: DataTypes.TEXT,
        suit: DataTypes.STRING,
        type: DataTypes.STRING,
    });
};

export default Card;
