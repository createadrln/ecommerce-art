const Card = require("../models/cardModel");

// Create a new greeting card
exports.createCard = async (req, res) => {
  try {
    const { text, selectedSVGs, userId } = req.body;
    const newCard = new Card({ text, selectedSVGs, user: userId });
    await newCard.save();
    res
      .status(201)
      .json({ message: "Card created successfully", card: newCard });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating card", error: error.message });
  }
};

// Update an existing greeting card
exports.updateCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const { text, selectedSVGs } = req.body;
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { text, selectedSVGs },
      { new: true }
    );
    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    res
      .status(200)
      .json({ message: "Card updated successfully", card: updatedCard });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating card", error: error.message });
  }
};

// Retrieve a greeting card by ID
exports.getCardById = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findById(cardId);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving card", error: error.message });
  }
};

// Retrieve all cards for a user
exports.getUserCards = async (req, res) => {
  try {
    const { userId } = req.params;
    const cards = await Card.find({ user: userId });
    res.status(200).json(cards);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving user cards", error: error.message });
  }
};
