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
  afterConnection();

 // start();
});

function afterConnection() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            console.log(results);
            for (var i = 0; i < results.length; i++) {
              choiceArray.push("Product Name: " + results[i].product_name + ", Price: $" + results[i].price);
            }
            return choiceArray;
          },
          message: "What is the ID of the item that you would like to purchase?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many units of this product would you like?"
        }
      ])
      .then(function(answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
            console.log(chosenItem);
          }
        }
      });
  });
}

// function which prompts the user for what action they should take

