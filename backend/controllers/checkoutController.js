const stripeService = require("../services/stripeService");

exports.createCheckoutSession = async (req, res) => {
  try {
    const session = await stripeService.createCheckoutSession(
      req.body.cartItems
    );
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
