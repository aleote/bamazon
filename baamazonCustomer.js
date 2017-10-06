var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) {
    throw err; 
  } else {

    for (var i = 0; i < res.length; i++) {
    
    console.log("------------------------------------------------------");
    console.log("Item Id:" + res[i].item_id);
    console.log("Product Name:" + res[i].product_name);
    console.log("Department" + res[i].department_name);
    console.log("Price:" + res[i].price);
    console.log("Quanitity:" + res[i].stock_quantity);
    console.log("------------------------------------------------------");

    var currentQty = res[i].stock_quantity;
  
}
    start(currentQty);
  }
  });
}


function start(current) {
  inquirer.prompt([
    {
      name: "idSearch",
      type: "input",
      message: "What is the id of the item that you would like to find?"
     
    },
    {
      name: "quantityPrompt",
      type: "input",
      message:"How many would you like to purchase?"
    }
    ]).then(function(response) {
      //query SELECT, find current stock of item ordered
      //parseInt() current stock and qty of stock ordered
      //find difference to get new stock... = newStock
      //pass new stock into completeOrder() with id
      //UPDATE in completeOrder() stock_quantity: newStock
        if(current > response.quantityPrompt){
          var qtyOrdered = response.quantityPrompt;
          var idOrdered = response.idSearch;
          completeOrder(idOrdered, qtyOrdered);
        }
      else {
        console.log("Insufficient Quantity!");


      }
});


}

function completeOrder(id, stock) {
    connection.query("UPDATE ? IN products WHERE ?",[
      {
        stock_quantity: stock
      },
      {
        item_id: id
      }] function(err, res) {
    if (err) {
    throw err; 
  } else {
    current - response.idSearch


}

function 

update quanitity from products where ? 