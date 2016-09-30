var maxNumberOfAssignments = 4;
var currentColor = "RED";


function getMean() {
  var allMarks = 0;
  var numberOfAssignments = 0;
  for (var i=0; i<maxNumberOfAssignments; i++) {
    var oneMark = parseFloat(document.getElementsByName("mark")[i].value);
    var oneTotal = parseFloat(document.getElementsByName("total")[i].value);
    if (isNaN(oneMark) || isNaN(oneTotal) || oneTotal<=0) continue;
    percent = oneMark/oneTotal;
    allMarks += percent;
    numberOfAssignments++;
    document.getElementsByName("percent")[i].innerHTML = String((percent*100).toFixed(2))+"%";
  }
  var result = (numberOfAssignments > 0) ? String((allMarks*100/numberOfAssignments).toFixed(2))+"%" : "N/A";
  document.getElementById("result").innerHTML = "Mean of Grades: " + result;
}


function getWeighted() {
  var allMarks = 0;
  var totalWeight = 0;
  for (var i=0; i<maxNumberOfAssignments; i++) {
    var oneMark = parseFloat(document.getElementsByName("mark")[i].value);
    var oneWeight = parseFloat(document.getElementsByName("weight")[i].value);
    var oneTotal = parseFloat(document.getElementsByName("total")[i].value);
    if (isNaN(oneMark) || isNaN(oneWeight) || isNaN(oneTotal) || oneTotal<=0) continue;
    percent = oneMark/oneTotal;
    allMarks += percent*oneWeight;
    totalWeight += oneWeight;
    document.getElementsByName("percent")[i].innerHTML = String((percent*100).toFixed(2))+"%";
  }
  var result = (totalWeight > 0) ? String((allMarks*100/totalWeight).toFixed(2))+"%" : "N/A";
  document.getElementById("result").innerHTML = "Weighted Grades: " + result;
}


function addNewRow() {
  maxNumberOfAssignments++;
  var tr = document.createElement("tr");
  var td = [];
  for (var i=0; i<5; i++) td.push(document.createElement("td"));
  td[0].appendChild(document.createTextNode("Activity "+String(maxNumberOfAssignments)));
  td[1].appendChild(document.createTextNode("A"+String(maxNumberOfAssignments)));

  addInput(td, 2, "weight");
  addInput(td, 3, "mark");
  td[3].appendChild(document.createTextNode("/"));
  addInput(td, 3, "total");

  var P = document.createElement("p");
  P.setAttribute("name", "percent");
  td[4].appendChild(P);

  for (var i=0; i<5; i++) tr.appendChild(td[i]);
  document.getElementById("table").appendChild(tr);
}

function addInput(list, index, name) {
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", name);
  list[index].appendChild(input);
}


function removeRow() {
  if (maxNumberOfAssignments <= 1) return;
  document.getElementById("table").deleteRow(maxNumberOfAssignments);
  maxNumberOfAssignments--;
}


function changeColor() {
  document.getElementById("colorChanger").innerHTML = currentColor;
  var newColorHex;
  if (currentColor == "RED") {
    newColorHex = "#039";
    currentColor = "BLUE";
  } else {
    newColorHex = "#900";
    currentColor = "RED";
  }
  var buttons = document.querySelectorAll("#button");
  var H3s = document.querySelectorAll("#h3");
  for (var i=0; i<buttons.length; i++) buttons[i].style.backgroundColor = newColorHex;
  for (var i=0; i<H3s.length; i++) H3s[i].style.color = newColorHex;
  document.querySelector("#background").style.backgroundColor = newColorHex;
  document.querySelector("#colorChanger").style.backgroundColor = newColorHex;
}
