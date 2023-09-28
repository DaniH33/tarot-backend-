import { Card } from "./db.js";

const makeAPICall = async () => {
    const response = await fetch(
        `https://tarot-api-3hv5.onrender.com/api/v1/cards`
    );
    const data = await response.json();
    for (const card of data.cards) {
        await Card.create(card);
    }

    console.log("Cards created in DB");
};

makeAPICall();
