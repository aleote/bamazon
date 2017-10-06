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
var order;

function start(current) {
    // console.log("THIS IS CURRENT" + current);
    inquirer.prompt([{
        name: "idSearch",
        type: "input",
        message: "What is the id of the item that you would like to find?"

    }, {
        name: "quantityPrompt",
        type: "input",
        message: "How many would you like to purchase?"
    }]).then(function(response) {

        var orderId = parseInt(response.idSearch);
        var orderIndex = orderId;
        var orderQty = parseInt(response.quantityPrompt);
        order = orderQty;

        connection.query('SELECT * FROM products', function(err, res) {
                var currentQty = res[orderIndex].stock_quantity;

            })
            // console.log(typeof current);
            console.log("current: ", current);
            console.log("quantityPrompt: ", response.quantityPrompt);
        if (current > response.quantityPrompt) {

           
            var qtyOrdered = response.quantityPrompt;
            var idOrdered = orderIndex;
            completeOrder(idOrdered, qtyOrdered, current);
        } else {
            console.log("Insufficient Quantity!");
            start();


        }
    });


}



function completeOrder(id, stock, current) {

    var newQTY = parseInt(current) - stock;
    console.log("Updated QTY: " + newQTY);

    connection.query("UPDATE PRODUCTS SET ? WHERE ?", [{
            stock_quantity: newQTY
        }, {
            item_id: id
        }],
        function(err, res) {
            if (err) {
                throw err;
            }
           

            
            
       
            showCost(id, order);
        });
}


function showCost(id, order) {

 
    connection.query('SELECT * FROM products WHERE ?', {
            item_id: id
        },
        function(err, res) {
            
            console.log("Price of Product:" + res[0].price);
            console.log("Quantity Ordered:" + order);
            var orderCost = parseInt(res[0].price) * order;
            console.log("Your total cost: $" + orderCost + '\n Thanks for Shopping!');

            connection.end();

        });
}





// //query SELECT, find current stock of item ordered
//      connection.query("SELECT * FROM currentQty")
//      //parseInt() current stock and qty of stock ordered
//      parseInt(currentQty, quantitiyPrompt)
//      //find difference to get new stock... = newStock
//      var NewStock = currentQty - quantityPrompt
//      //pass new stock into completeOrder() with id
//      //UPDATE in completeOrder() stock_quantity: newStock}