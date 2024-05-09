#!/bin/bash

# Check if a product ID was provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <product_id>"
    exit 1
fi

# Product ID passed as the first argument
PRODUCT_ID=$1

# cURL command to delete the product
curl -X DELETE http://localhost:3000/products/$PRODUCT_ID

# Run with sh delete_product.sh <product_id>