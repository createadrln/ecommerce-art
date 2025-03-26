# Ecommerce Greeting Card Application

This project is an ecommerce application that allows users to design and customize digital greeting cards, such as birthday cards. Users can select fonts, edit text, manipulate SVG graphics, and purchase their final designs.

## Features

- User authentication (registration and login)
- Customizable greeting card editor using KonvaJS
- Selection and manipulation of SVG vector graphics
- Font selection and text editing
- Payment processing integrated with Stripe
- User account management with purchase history

## Technologies Used

- **Frontend**: React, Vite, KonvaJS
- **Backend**: Node.js, Express, MongoDB
- **Payment Processing**: Stripe

## Project Structure

```
ecommerce-app
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── app.js
│   ├── server.js
│   └── config
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   ├── index.html
│   ├── vite.config.js
├── package.json
├── README.md
└── .env
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory and add your MongoDB connection string and Stripe API keys.

5. Start the backend server:
   ```
   cd backend
   node server.js
   ```

6. Start the frontend application:
   ```
   cd ../frontend
   npm run dev
   ```

## Usage

- Navigate to the homepage to start designing your greeting card.
- Use the card editor to customize your card with text and SVG graphics.
- Proceed to checkout to purchase your card using Stripe.
- Log in to view your purchase history.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.