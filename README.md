# Bamazon

### Overview

This CLI application creates a mock Amazon-like storefront using MySQL and Node.js with the npm `inquirer` and `mysql` packages.

### Installation

Download or clone the repository and run `npm install` to ensure project dependencies are available.

<span style="font-size: 0.8rem;">*Prerequisites: Node.js and MySQL*</span>

### How It Works

Simply run `node bamazonCustomer.js` in the terminal to start the program.

A list of items for sale are displayed, including their product ID, name, and price.  

<p align="center">
	**<span style="color: orange;">Screenshot #1 - Product Display</span>**<br />  
  <img src="screenshots/bamazon-ss1.png" width="75%" title="Screenshot displaying products">
</p>

An `inquirer` prompt message gets the ID of the product the user would like to buy and how many units of the product they need.  

<p align="center">
	**<span style="color: orange;">Screenshot #2 -</span>** `inquirer` **<span style="color: orange;">Prompt</span>**<br />  
  <img src="screenshots/bamazon-ss2.png" width="75%" title="Screenshot displaying inquirer prompt message">
</p>

When an order is placed, the application checks to see if the store has enough of the product to meet the customer's request.

If not, a message is displayed informing the customer there are not enough items in stock. In the case below, the store only has 35 Xbox One X 1TB Consoles in stock, but the user tried to order 100.  

<p align="center">
	**<span style="color: orange;">Screenshot #3 - Insufficient Quantity </span>**<br />  
  <img src="screenshots/bamazon-ss3.png" width="75%" title="Screenshot displaying insufficient quantity message">
</p>

If there are enough items in stock, the SQL database is updated to reflect the remaining quantity and the customer is shown the total cost of their purchase.  

<p align="center">
	**<span style="color: orange;">Screenshot #4 - SQL Database Updated </span>**<br />  
  <img src="screenshots/bamazon-db-ss1.png" width="75%" title="Screenshot displaying updated SQL database">
</p>

## Authors
* **Justin Flick** - *Everything*