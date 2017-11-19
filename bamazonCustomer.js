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
		for (var i = 0; i < res.length; i++) {
			console.log(`Product Name: ${res[i].product_name}\nItem ID: ${res[i].item_id}\nPrice: ${res[i].price}`);
			console.log("------------------------------------------------------------");
		}
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
			console.log(answers.getIdPrompt);
			console.log(answers.getQuantityPrompt);
		})
	; // End inquirer.
}