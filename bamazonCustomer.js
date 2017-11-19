// Require MySQL and Inquirer packages.
var mysql = require("mysql");
var inquirer = require("inquirer");
// Require configuration file to hold passwords.
var config = require("./config/password");

// Setup the MySQL connection to use appropriate database.
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: config.password,
	database: "bamazon"
});

connection.connect(function(err) {
	if (err) throw err;
	// Display items available.
	displayItems();
	// Use setTimeout so items are displayed before the question.
	setTimeout(inquireUser, 2000);
});

// Function to display the items available for sale with their price and id.
function displayItems() {
	// Store the SQL statement in a variable.
	var selectItems = "SELECT item_id, product_name, price FROM products";
	// Use the query method of the connection object created above to retrieve product information from the results (res) array.
	connection.query(selectItems, function(err, res) {
		console.log("\n------------------------------------------------------------");
		for (var i = 0; i < res.length; i++) {
			console.log(`Product Name: ${res[i].product_name}\nItem ID: ${res[i].item_id}\nPrice: \t $${parseFloat(res[i].price).toFixed(2)}`);
			console.log("------------------------------------------------------------");
		}
		console.log("\n");
	});
}

var inquireUser = function() {
	inquirer
		// Prompt user for the product they want and quantity of the product.
		.prompt([
			{
				type: "input",
				message: "Enter the ID for the product you would like to buy.",
				name: "getIdPrompt"
			},

			{
				type: "input",
				message: "How many units of this product would you like to buy?",
				name: "getQuantityPrompt"
			}
		])
		.then(answers => {
			// Query by product ID number and compare to quantity remaining.
			var selectById = "SELECT stock_quantity FROM products WHERE item_id = ?";
			connection.query(selectById, answers.getIdPrompt, function(err, res) {
				// If the quantity desired is greater than the amount in stock display a message and ask again.
				if (answers.getQuantityPrompt > res[0].stock_quantity) {
					console.log("Insufficient quantity. Not enough remain in stock.");
					setTimeout(inquireUser, 2000);
				}
				// Otherwise, update the database and fulfill the order.
				else {
					// Query to update the stock in the database according to the product ID the user specified.
					var updateStock = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
					connection.query(updateStock, [(res[0].stock_quantity - answers.getQuantityPrompt), answers.getIdPrompt], function(err, res) {
						console.log("\nOrder fulfilled! Items have been removed from inventory and will be shipped to you!");
					});
					// Query to get the price for the item and display the user's total based on quantity ordered.
					var getPrice = "SELECT price FROM products WHERE item_id = ?";
					connection.query(getPrice, answers.getIdPrompt, function(err, res) {
						console.log("Total: $" + parseFloat(res[0].price * answers.getQuantityPrompt).toFixed(2));
					});

				}
			});
		})
	; // End inquirer.
}