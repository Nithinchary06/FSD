//creating a promise

const mypromise = new Promise((resolve, reject) => {
  let sucess = false

  if (sucess) {
    resolve("Resolved")
  } else {
    reject("Rejected")
  }
})

mypromise
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })

const myorder = new Promise((resolve, reject) => {
  console.log("Preparing Food")

  setTimeout(() => {
    resolve("Food is ready")
  }, 3000)
})

myorder.then((msg) => {
  console.log(msg)
})
