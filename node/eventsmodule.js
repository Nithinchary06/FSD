const events = require("events")
// fs.appendFile("sample.txt", "Hello World", (err) => {
//   if (err) console.log(err)
// })

// fs.access("sample.txt", fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log("File does not exist")
//   } else {
//     console.log("File exists")
//   }
// })

fs.writeFile("abc.txt", "Hello World")
