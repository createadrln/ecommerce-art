import React, { useState } from "react";
import CardEditor from "../components/CardEditor";
import { useNavigate } from "react-router-dom";

const CardPage = () => {
  const [cardDetails, setCardDetails] = useState({
    text: "Happy Birthday!",
    font: "Arial",
    fontSize: 20,
    selectedSVG: null,
  });
  const navigate = useNavigate();

  const handleCardDetailsChange = (newDetails) => {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      ...newDetails,
    }));
  };

  const handlePurchase = async () => {
    navigate("/checkout");
  };

  return (
    <div className="card-page">
      <h1>Design Your Greeting Card</h1>
      <CardEditor
        cardDetails={cardDetails}
        onCardDetailsChange={handleCardDetailsChange}
      />
      <button onClick={handlePurchase}>Purchase & Download</button>
    </div>
  );
};

export default CardPage;
