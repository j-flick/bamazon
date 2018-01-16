# Bamazon

### Overview

This CLI application creates a mock Amazon-like storefront using MySQL and Node.js with the npm `inquirer` and `mysql` packages.

### Installation

Download or clone the repository and run `npm install` to ensure project dependencies are available.

<span style="font-size: 0.8rem;">*Prerequisites: Node.js and MySQL*</span>

### How It Works

Simply run `node bamazonCustomer.js` in the terminal to start the program.

A list of items for sale are displayed, including their product ID, name, and price.  

**Screenshot #1 - Product Display**<br />  
![Screenshot displaying products](screenshots/bamazon-ss1.png)

An `inquirer` prompt message gets the ID of the product the user would like to buy and how many units of the product they need.  

**Screenshot #2 - `inquirer` Prompt**<br />  
![Screenshot displaying inquirer prompt message](screenshots/bamazon-ss2.png)

When an order is placed, the application checks to see if the store has enough of the product to meet the customer's request.

If not, a message is displayed informing the customer there are not enough items in stock. In the case below, the store only has 35 Xbox One X 1TB Consoles in stock, but the user tried to order 100.  

**Screenshot #3 - Insufficient Quantity**<br />  
![Screenshot displaying insufficient quantity message](screenshots/bamazon-ss3.png)

If there are enough items in stock, the SQL database is updated to reflect the remaining quantity and the customer is shown the total cost of their purchase.  

**Screenshot #4 - SQL Database Updated**<br />  
![Screenshot displaying updated SQL database](screenshots/bamazon-db-ss1.png)

## Authors
* **Justin Flick** - *Everything*