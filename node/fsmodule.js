const fs = require("node:fs")

// console.log("START")
// fs.writeFileSync("abc.txt", "Hello World!")
// console.log("END")

// console.log("START")
// fs.writeFileSync("abc.txt", "Hello World! again")
// console.log("END")

// console.log("Reading the File..")
// let data = fs.readFileSync("abc.txt", "utf-8")
// console.log(data)

console.log("START")
fs.writeFile("abc.txt", "Hello World! again", () => {
  console.log("Writing into th file  s")
})
console.log("END")

console.log("Reading the File..")
let data = fs.readFile("abc.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error in reading...")
  } else {
    console.log(data)
  }
})
console.log("readin the file has completed...")
