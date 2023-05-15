function calc() {
  var input = document.getElementById("deg");
  var result = document.getElementById("res");
  var selectValue = document.getElementById("unit").value;

  if (selectValue == "F") {
    let output = (parseFloat(input.value) * 9) / 5 + 32;
    result.value = parseFloat(output.toFixed(2)) + "\u00B0" + "F";
  } else {
    let output = ((parseFloat(input.value) - 32) * 5) / 9;
    result.value = parseFloat(output.toFixed(2)) + "\u00B0" + "C";
  }
}
