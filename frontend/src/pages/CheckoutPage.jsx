import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { createCheckoutSession } from "../services/api";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutPage = ({ cartItems, totalAmount }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      const response = await createCheckoutSession(cartItems);

      const { sessionId } = response.data;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError("Failed to initiate checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div>
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price}
            </p>
          </div>
        ))}
        <h3>Total: ${totalAmount}</h3>
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Checkout"}
      </button>
    </div>
  );
};

export default CheckoutPage;
