var myTemperature = [];
var myHumidity = [];

function addData() {
  myTemperature.push(document.getElementById("tempIn").value);
  myHumidity.push(document.getElementById("humIn").value);
  drawPlotly();
}

function drawPlotly() {
  var temperature = {
    y: myTemperature,
    name: "Temperature",
    mode: "lines-markers"
  };
  var humudity = {
    y: myHumidity,
    name: "Humidity",
    mode: "lines-markers"
  };
}
