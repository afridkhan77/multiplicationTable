
var num = 12;

function multiplicationTable(n, i = 1) {
  if (i == 11) 
    return;
  console.log(n + " x " + i + " = " + n * i);
  i++; 
  multiplicationTable(n, i);
} 
multiplicationTable(num);




