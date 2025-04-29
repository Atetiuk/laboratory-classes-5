class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  static products = [];

  static add(product) {
    this.products.push(product);
  }

  static getAll() {
    return this.products;
  }

  static findByName(name) {
    return this.products.find(p => p.name === name);
  }
}

module.exports = Product;
