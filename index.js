var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  productList();

 // start();
});

function productList() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

        for (var i = 0; i < results.length; i++) {
            console.log("Product ID: " + results[i].id + "\n", 
            "Product: " + results[i].product_name + "\n",
            "Price: $" + results[i].price + "\n",
            "----------------------------------")
        }
  });
  productSelect();
}

function productSelect() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      inquirer
        .prompt([
          {
            name: "choice",
            type: "input",
            message: "What is the ID of the item that you would like to purchase?"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many units of this product would you like?"
          }
        ])
        .then(function(answer) {
         
        if (answer.quantity > results[answer.choice - 1].stock_quantity) {
            console.log("Insufficient quantity!");
            connection.end();
        }

        else {
          console.log("Total Cost: $" + (results[answer.choice - 1].price * answer.quantity));
        }
        
        });
    });
  }

// function which prompts the user for what action they should take

