function sample() {
  document.getElementById("head").style.color = "blue"
}
function colorfunc() {
  document.body.style.backgroundColor = "yellow"
}
document.write("Welcome")
let x = document.getElementById("head")
x.addEventListener("click", sample)
let button = document.getElementById("btn")
button.addEventListener("click", colorfunc)
function storeDetails() {
  let obj = {
    name: "Nithin",
    age: 20,
  } // let name = document.getElementById("uname").value;
  localStorage.setItem("abc", JSON.stringify(obj))
  let object1 = localStorage.getItem("abc")
  let parsed = JSON.parse(object1)
  console.log(parsed.name)
}
document.getElementById("input-btn").addEventListener("click", storeDetails)
