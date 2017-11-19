DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(200) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES
	("Eloquent JavaScript, 2nd Ed.", "Books", 31.96, 150),
	("HTML and CSS: Design and Build Websites", "Books", 15.98, 75),
	("Studio One 3 - Reference Manual", "Books", 49.95, 25),
	("Akai Professional MPC X", "Musical Instruments", 2199.00, 50),
	("Rode NTK Tube Condenser Microphone", "Musical Instruments", 529.00, 30),
	("The Office: The Complete Series", "Movies & TV", 73.95, 100),
	("Impractical Jokers: The Complete Fifth Season", "Movies & TV", 19.99, 70),
	("Apollo Brown & OC - Trophies", "CDs and Vinyl", 12.97, 40),
	("Qwel & Maker - Beautiful Raw", "CDs and Vinyl", 14.99, 15),
	("Xbox One X 1TB Console", "Video Games", 499.00, 35);

SELECT * FROM products;