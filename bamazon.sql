DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;


CREATE TABLE products (
  item_id INTEGER (30),
  product_name VARCHAR (30),
  department_name VARCHAR(30),
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Flannel Shirt", "Apparel", 30, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Jeans", "Apparel", 30, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Hat", "Accessories", 10, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Boots", "Apparel", 70, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Scarf", "Accessories", 20, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7 , "Tent", "Camping", 40, 90);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8 , "Lantern", "Camping", 15, 60);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Weights", "Exercise", 25, 28);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Leash", "Pets", 15, 40);




