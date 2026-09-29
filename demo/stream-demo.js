const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "order.txt");

const stream = fs.createReadStream(filePath, { encoding: "utf8" });

stream.on("data", chunk => {
  console.log("Received Chunk:");
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Finished reading order file.");
});

stream.on("error", error => {
  console.log("Stream Error:", error.message);
});
