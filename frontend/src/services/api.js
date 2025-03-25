import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Adjust the URL based on your backend setup

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// User API calls
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
};

export const fetchUserDetails = async (userId) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response.data;
};

// Card API calls
export const createCard = async (cardData) => {
  const response = await axios.post(`${API_URL}/cards`, cardData);
  return response.data;
};

export const fetchUserCards = async (userId) => {
  const response = await axios.get(`${API_URL}/cards/user/${userId}`);
  return response.data;
};

export const updateCard = async (cardId, cardData) => {
  const response = await axios.put(`${API_URL}/cards/${cardId}`, cardData);
  return response.data;
};

export const deleteCard = async (cardId) => {
  const response = await axios.delete(`${API_URL}/cards/${cardId}`);
  return response.data;
};

// Payment API calls
export const createPaymentIntent = async (paymentData) => {
  const response = await axios.post(`${API_URL}/payment`, paymentData);
  return response.data;
};

export const createCheckoutSession = (cartItems) => {
  return api.post("/checkout/create-checkout-session", { cartItems });
};

export default api;
