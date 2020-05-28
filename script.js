function tipCalculate() {
  //get inputted cost from index
  var cost = document.getElementById("cost").value;

  //get selected percentage as string
  var tip_pct = document.getElementById("pct_value").value;

  //get decimal value from tip_pct
  tip_pct = parseFloat(tip_pct) / 100;

  //calculate the tip
  var tip_total = cost * tip_pct;
  //format tip to 2 decimal spaces
  tip_total = tip_total.toFixed(2);
  //output the tip total if not NaN
  if (!isNaN(tip_total)){
    document.getElementById("output").innerHTML = "$" + tip_total;
  }
  else{
    alert("Enter a valid price.");
  }
}