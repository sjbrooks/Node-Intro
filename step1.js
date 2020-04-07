const fs = require("fs");
const argv = process.argv;
const PATH = process.argv[2];

function cat(PATH) {
  fs.readFile(PATH, "utf8", function (err, data) {
    if (err) {
      console.log(`Error reading ${PATH}`, err);
      process.exit(1);
    }
    console.log(data);
    process.exit(0);
  });
}

cat(PATH);
