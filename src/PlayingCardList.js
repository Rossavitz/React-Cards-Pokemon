import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { v1 as uuid } from "uuid";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((card) => (
          <PlayingCard key={uuid()} front={card.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
