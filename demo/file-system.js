const fs = require("fs");
const path = require("path");

const orderDetails = `Mahalaxmi Dudh Kendra
Customer: Vedant
Order Type: Dairy Products
Product: Fresh Cow Milk
Quantity: 2 Litres
Delivery Location: Panvel
`;

const filePath = path.join(__dirname, "order.txt");

fs.writeFile(filePath, orderDetails, error => {
  if (error) {
    console.log("Error writing file:", error);
    return;
  }
  console.log("Order details written successfully.");

  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      console.log("Error reading file:", error);
      return;
    }
    console.log("Order Details:");
    console.log(data);
  });
});
