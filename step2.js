const fs = require("fs");
const axios = require("axios");
const argv = process.argv;
const INPUT = process.argv[2];

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

async function webCat(URL) {
  axios.get(URL).then(function (resp) {
    console.log(resp.data);
  });
}

if (INPUT.includes("http")) {
  webCat(INPUT);
} else {
  cat(INPUT);
}
