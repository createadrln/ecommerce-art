const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

// Route to create a new greeting card
router.post("/cards", cardController.createCard);

// Route to update an existing greeting card
router.put("/cards/:id", cardController.updateCard);

// Route to retrieve a specific greeting card
router.get("/cards/:id", cardController.getCardById);

// Route to retrieve all greeting cards for a user
router.get("/users/:userId/cards", cardController.getUserCards);

module.exports = router;
