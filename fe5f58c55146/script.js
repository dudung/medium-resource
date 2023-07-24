var n = 1
function button_click() {
  var ta = document.getElementById("output");
  
  ta.value += "Hello, World! " + n + "\n";
  n++;
}
