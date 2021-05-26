
var num=+prompt("Enter a positive integer Number");
document.write("</br>the number you entered is ", num);
if(num>0){
var roundNum=Math.round(num);
document.write("</br>after rouding off your the number you entered is ", roundNum);
var floorNum=Math.floor(num);
document.write("</br>after floor off your the number you entered is ", floorNum);
var ceilNum=Math.ceil(num);
document.write("</br>after Ceil off your the number you entered is ", ceilNum);
}
else{alert("Enter a positive integer")}
"</br>"
"</br>"
"</br>"

var num=+prompt("Enter a negative integer Number");
if(num<0){
document.write("</br>the number you entered is ", num);
var roundNum=Math.round(num);
document.write("</br>after rouding off your the number you entered is ", roundNum);
var floorNum=Math.floor(num);
document.write("</br>after floor off your the number you entered is ", floorNum);
var ceilNum=Math.ceil(num);
document.write("</br>after Ceil off your the number you entered is ", ceilNum);
}
else{alert("Enter a negative integer")}


var num=+prompt("Enter a Number to find it's absoulute value");
document.write("</br>the number you entered is ", num);
var absNum=Math.abs(num);
document.write("</br>The absolute value of the number you entered is ", absNum);

var num=Math.round(Math.random()*6)
document.write("</br>The Random Dice value is is ", num);

var num=Math.round(Math.random()*2)
if(num===2){document.write("</br>2<br/>The Random Coin Valu is:  ","Heads");
}
else if(num===1){document.write("</br>1</br>The Random Coin Valu is:  ","Tails");}

var num=Math.round(Math.random()*100)
document.write("</br>The Random Number between 1-100 is ", num);


var weight=prompt("Enter your weight in Kilograms");
weight=parseFloat(weight);
document.write("</br>The weight of the user  is ", weight," Kilograms");

var num=Math.round(Math.random()*10)
var newNum=+prompt("Enter a random number from 1-10");
if(num===newNum)
alert("</br>Congratulations! the number your entered matches the Secret Number");
else
alert("try again next time");
console.log(num);
console.log(newNum);