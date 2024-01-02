document.addEventListener("DOMContentLoaded", () => {
  // your code here

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault()
handleToDo(e.target.new-task-description.value)
})

});

function handleToDo(ToDo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = "x"
  p.textContent = ToDo
  document.querySelector("#tasks").appendChild(p)
}