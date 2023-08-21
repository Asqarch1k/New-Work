const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#list-container");
const time = document.querySelector(".time");
const days = document.querySelector(".days");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");

    li.innerHTML = inputBox.value;
    span.textContent = "❌";
    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function hozirgiKun() {
  var date = new Date();
  var yil = date.getFullYear();
  var oy = date.getMonth() + 1;
  var kun = date.getDate();

  days.innerHTML =
    "Sana: " +
    (kun < 10 ? "0" + kun : kun) +
    ":" +
    (oy < 10 ? "0" + oy : oy) +
    ":" +
    (yil < 10 ? "0" + yil : yil) +
    "y";
}
hozirgiKun();

function hozirgiVaqtniOlish() {
  var hozirgiVaqtniOlish = new Date();
  var soat = hozirgiVaqtniOlish.getHours();
  var daqiqa = hozirgiVaqtniOlish.getMinutes();
  var saniya = hozirgiVaqtniOlish.getSeconds();
  var oshibBorayotganSaniyalar = soat * 3600 + daqiqa * 60 + saniya;

  time.innerHTML =
    " Vaqt: " +
    (soat < 10 ? "0" + soat : soat) +
    ":" +
    (daqiqa < 10 ? "0" + daqiqa : daqiqa) +
    ":" +
    (saniya < 10 ? "0" + saniya : saniya);
}
hozirgiVaqtniOlish();
setInterval(function () {
  hozirgiVaqtniOlish();
}, 1000);

// (async) => {
//   const response = await fetch('')
// };
