# Bamazon

## Overview

This CLI application creates a mock Amazon-like storefront using `MySQL` and `Node.js` with the NPM `Inquirer` package.

It displays items available for sale, including their product ID, name, and price.

An Inquirer prompt message gets the ID of the product the user would like to buy and how many units of the product they need.

When an order is placed, the application checks to see if the store has enough of the product to meet the customer's request.

If not, a message is displayed informing the customer there are not enough items in stock.

If there are enough items in stock, the SQL database is updated to reflect the remaining quantity and the customer is shown the total cost of their purchase.