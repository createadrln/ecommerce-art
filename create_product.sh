#!/bin/bash

# This script sends a POST request to create a new product

curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{
    "name": "Elegant Birthday Invitation",
    "description": "A beautifully designed digital birthday invitation in PDF and EPS formats.",
    "price": 5.99,
    "format": "PDF, EPS"
    "thumbnail_image": "./product_images/thumbnails/XXXX.jpg"
    "main_image": "./product_images/main/XXXX.jpg"
}'
