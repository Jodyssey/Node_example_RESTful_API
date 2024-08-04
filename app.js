const express = require("express");
const app = express();

app.use(express.json())

class Product {
  constructor(id, name, image, price, stock) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.stock = stock;
  }
}

const products = [
  new Product(1, "Macbook", "", 90000, 0),
  new Product(2, "IPhone", "", 50000, 10),
];

let count = products.length;

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/price", (req, res) => {
  const { min, max } = req.query;
  const result = products.filter(
    (product) => product.price >= min && product.price <= max
  );
  res.json(result);
});

app.get("/products/:id", (req, res) => {
  const result = products.filter((product) => product.id == req.params.id);
  if (result.length > 0) {
    res.json(result[0]);
  } else {
    res.status(404).json({});
  }
});

app.post("/products", (req, res) => {
  const { name, price, stock } = req.body;
  count = count + 1;
  const product = new Product(count, name, "", price, stock);
  products.push(product);
  res.status(201).json(product);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);

  console.log("Press Ctrl + C To quit.");
});
