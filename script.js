function tipCalculate() {
  var cost = document.getElementById("cost").value;
  var tip_pct = document.getElementById("tip_pct").value;
  var tip_total = cost * (tip_pct / 100);
  tip_total = tip_total.toFixed(2);
  document.getElementById("output").innerHTML = "$" + tip_total;
  //alert(tip_total);
}