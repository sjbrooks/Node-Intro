const fs = require("fs");
const axios = require("axios");
const argv = process.argv;
let INPUT = process.argv[2];
let OUTPUT = null;

async function cat(PATH, OUTPUT) {
  fs.readFile(PATH, "utf8", function (err, data) {
    if (OUTPUT) {
      fs.writeFile(`./${OUTPUT}`, data, "utf8", function (err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log("Successfully wrote to file!");
        process.exit(0);
      });
    } else {
      if (err) {
        console.log(`Error reading ${PATH}`, err);
        process.exit(1);
      }
      console.log(data);
      process.exit(0);
    }
  });
}

async function webCat(URL, OUTPUT) {
  axios.get(URL).then(function (resp) {
    if (OUTPUT) {
      fs.writeFile(OUTPUT, resp.data, "utf8", function (err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log("Successfully wrote to file!");
        process.exit(0);
      });
    } else {
      console.log(resp.data);
      process.exit(0);
    }
  });
}

if (INPUT === "--out") {
  INPUT = process.argv[4];
  OUTPUT = process.argv[3];
}

if (INPUT.includes("http")) {
  webCat(INPUT, OUTPUT);
} else {
  cat(INPUT, OUTPUT);
}
