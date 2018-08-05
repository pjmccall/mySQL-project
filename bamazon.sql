DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("golf clubs", "sports", 250, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("macbook", "electronics", 1250, 52);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gucci sweater", "clothes", 55, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("oakley sunglasses", "accessories", 323, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("drake album", "music", 17, 225);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("wilson basketball", "sports", 40, 29);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone", "electronics", 1200, 152);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nike sweatshirt", "clothes", 65, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coach purse", "accessories", 800, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kanye album", "music", 15, 271);