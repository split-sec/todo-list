function addDate() {
  let x = Date();
  x = x.split(' ');
  let y = x.slice(0, 4);
  let z = "";
  y.forEach((item) => {
    z += item + " ";
  });

  document.getElementById("heading").innerHTML = "Todos for today - " + z;
}

function addTask() {
  let taskText = document.getElementById("taskText").value;
  if(taskText.trim() == "") {
    alert("Don't add empty task");
  }
  else {
    let ol = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));
    li.setAttribute("id", "task");
    ol.appendChild(li);
    let typeText = document.getElementById("taskText");
    typeText.value = "";
  }
}

let tasks = document.getElementById("task");
