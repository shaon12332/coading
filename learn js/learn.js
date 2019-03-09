/*var productPrice = 100;
var inStock = false;
var paid = false;

if(inStock){
	if(paid){
		document.write("Product is ready for delivery.");
	}else{
		document.write("Payment is due.")
	}
}else{
	document.write("Product is out of stock.")
}*/

/*var n = 6;

var check = n % 2;

if(n == 0){
	document.write(n + " is not positive or negetive number.");
}else if (check > 0){
	document.write(n + " is odd.");
}else{
	document.write(n + " is even.");
}*/

/*var n = 7;
var check = n % 2;
var result;

(check > 0) ? document.write("This number is Odd"):document.write("This number is Even");
// document.write("This number is " + result);
*/

/*var n = 0;

while(n < 10){
	if(n % 2 == 0 && n >= 2){
		document.write(n + " is devided by 2");
		document.write("<br>");
	}
	n++;
}*/

/*var n = 0;

while(n < 10){
	(n % 2 == 0 && n >= 2) ? document.write(n + " is devided by 2" + "<br>"):"";
	n++;
}*/

/*var n;

for(n = 0; n < 10 && n % 2 == 0; n +=2){
	document.write(n + "is devided by 2" + "<br>");
}*/



/*for(n = 1; n <= 10; n++){
	searis = n * 2;
	document.write(searis + " ");
}*/

/*for(n = 1; n <= 10; n += 3){
	document.write(n + " ");
}*/

/*for(n = 1;n <= 10;n++){
	searis = (n*n)-1;
	document.write(searis + " ");
}*/

/*var searis = "";



for(n = 1;n <= 10;n++){
	if(n % 2 == 0){
		i = n*2;
		searis = searis + i + " ";
	}else{
		searis = searis + n + " ";
	}
}

document.write(searis);*/


/*for(i = 0;i <= 10;i = i + i){
	n = i;

	searis = searis + n + " ";
}

document.write(rearis);*/


/*var n;

for(n = 1; n <= 10; n++){
	for(i = 1;i <= 10;i++){
	var result = n*i;
	document.write(n + " " + "X" + " " + i + " " + "=" + " " + result + "<br>")
	}

	document.write("<br>");
	document.write("<br>");
}*/


/*var n = 100;
var i;
var result = "";

for(i = 1; i <= n; i++){
	if(n % i == 0){
		result = result + i + ", ";
	}else{

	}
}

document.write(result);*/


/*var n=144;
var range=Math.ceil(Math.sqrt(n));
var divisors="";
var i;

for(i=1;i<=range;i++){
	if(n%i==0){
		if(i==n/i){
			divisors=divisors+i+" ";
		}else{
			divisors=divisors+i+" "+(n/i)+" ";
		}
	}
}

document.write(divisors);
*/

/*var monthName="Octobor 2018";
var monthDay=31;
var startDay=1;


document.write("Sun----Mon----Tue----Wed----Thu----Fri----Sat"+"<br><br>");

for(i=0;i<5;i++){

	for(n=1;n<=7;n++){

		var date=i*7+n-startDay;

		if (date<1) {
			document.write("--------");
		}else if(date<10){
			document.write(date+"-------");
		}else if(date>9 && date<monthDay){
			document.write(date+"-----");
		}else{
			document.write(date);
		}
		if (date==monthDay) {
			break;
		}

	}
	
	document.write("<br>");
	document.write("<br>");
}*/


/*var males=["Shumon","Tipu","Tanvir","Rahima"];
var females=["Mitu","Nipa"];

document.write("Male array:- "+males);
document.write("<br>");
document.write("Female array:- "+females);
document.write("<br>");
document.write("<br>");
document.write("After corraction");

var corraction=males.pop();


// females[females.length]=corraction;
females.push(corraction);

document.write("<br>");
document.write(males);
document.write("<br>");
document.write(females);*/


/*var males=["Shumon","Tipu","Tanvir","Rahima","Mitu","Nipa"];
var i;

for(i=0;i<males.length;i++){
	document.write(males[i] + "<br>");
}*/

/*var give=1;
var i;
var unit="";
var newNum;

for(i=1;i<=64;i++){
	give*=2;
	newNum=give;
	if(give>=1000 && give<100000){
		unit="K";
		newNum=give/1000;
	}else if(give>=100000 && give<10000000){
		unit="M";
		newNum=give/100000;
	}else if(give>=10000000 && give<1000000000){
		unit="G";
		newNum=give/10000000;
	}else{
		unit="";
	}
	
	document.write(i+") "+newNum+unit+"<br>");
}*/

/*function revString(data){
	var revSentence=data.split("").reverse("").join("");
	return revSentence;
}

var sentence="hello world";
var reversedStr=revString(sentence);

document.write(revString(sentence));*/


/*function revString(data="Hello world"){
	var strElement=data.split("");
	var strSize=strElement.length;
	var i;
	var newStr="";
	for(i=strSize-1;i>=0;i--){
		newStr+= strElement[i];
	}
	return newStr;
}

document.write(revString("My name is Ariful Islam"));
document.write("<br>");
document.write(revString("This is test"));
*/

/*var list=[2,6,8,32,78,12,45,65,9,8,4,5];
var listSize=list.length-1;

for(var i=0;i<listSize;i++){
	for(var j=0;j<listSize;j++){
		if(list[j]>list[j+1]){
			[list[j],list[j+1]]=[list[j+1],list[j]];
		}
	}
}*/
// for(var n=0;n>=listSize;n++){
// 	newList+=list[n];
// }

// document.write(list);








/*
var a = 2555;
var b = Math.ceil(Math.sqrt(a));
var result = "";

for(var i = 0; i <= b; i++){
	if(a%i==0){
		if(i == a/i){
			result += i + " ";
		}else{
			result += i + " " + (a/i) + " ";
		}
	}
}


document.write(result);
document.write("<br>");*/

/*convert string to array*/

// var newResult = result.split(" ");



/*end converting*/

/*remove the empty element from the array and convert to number*/

/*var newResultok = [];

for(x in newResult){
	if(newResult[x]){
		newNumber = Number(newResult[x]);
		newResultok.push(newNumber);
	}
}*/


/*end removing and converting*/

/*rearranger the array*/

/*var newResultLnth = newResultok.length-1;

for(var n = 0; n < newResultLnth; n++){
	for(var y = 0; y < newResultLnth; y++){
		if(newResultok[y] > newResultok[y+1]){
			[newResultok[y],newResultok[y+1]]=[newResultok[y+1],newResultok[y]];
		}
	}
}


document.write(newResultok);
document.write("<br>");

document.write(typeof newResultok);*/

/*
function writeText(text = "hello rohim"){
	document.write(text);
}

writeText("Hello World");
document.write("<br>");
writeText("Hello text");
writeText("Hello World");
document.write("<br>");
writeText();
*/


/*
function text(data){
	var revText = (data.split('').reverse('').join(''));
	document.write(revText);
}

text("Hello World");
text("new text");
*/

/*
function short(...data){
	for(var i = 0; i < data.length-1; i++){
		for(var n = 0; n < data.length-1; n++){
			if(data[n]>data[n+1]){
				[data[n],data[n+1]]=[data[n+1],data[n]];
			}
		}
	}
	document.write(data);
	document.write("<br>");
}

short(5,8,3,65,78,15,1,2);
short(4897,897,64598,79846,5467987,8965);

var number = [1,658,23,45,65,1321,86,5,58,789,653];

short(number);

*/

/*
var images = [
'img/image1.jpg',
'img/image2.jpg',
'img/image3.jpg',
'img/image4.jpg',
'img/image5.jpg',
'img/image6.jpg'
];

var index = 0;

var buttons = document.querySelectorAll('button');
var image = document.querySelector('img');

function nextImg(){
	index++;
	if(index > images.length - 1){
		index = 0;
	}
	image.setAttribute('src', images[index]);
}

function prevImg(){
	index--;
	if(index < 0){
		index = images.length - 1;
	}
	image.setAttribute('src', images[index]);
}

buttons[0].addEventListener('click', nextImg);
buttons[1].addEventListener('click', prevImg);

// setInterval(nextImg, 1000);
*/




var index = 0;

var buttons = document.querySelectorAll('button');
var image = document.querySelectorAll('img');

function aboutSec(){
	for(var i = 0; i <= image.length - 1; i++){
		image[i].style.display = 'none';
	}
	image[0].style.display = 'block';
}

function serviceSec(){
	for(var i = 0; i <= image.length - 1; i++){
		image[i].style.display = 'none';
	}
	image[1].style.display = 'block';
}

function resumeSec(){
	for(var i = 0; i <= image.length - 1; i++){
		image[i].style.display = 'none';
	}
	image[2].style.display = 'block';
}

function testimoSec(){
	for(var i = 0; i <= image.length - 1; i++){
		image[i].style.display = 'none';
	}
	image[3].style.display = 'block';
}

function blogSec(){
	for(var i = 0; i <= image.length - 1; i++){
		image[i].style.display = 'none';
	}
	image[4].style.display = 'block';
}

function contactSec(){
	for(var i = 0; i <= image.length - 1; i++){
		image[i].style.display = 'none';
	}
	image[5].style.display = 'block';
}
/*
function prevImg(){
	index--;
	if(index < 0){
		index = images.length - 1;
	}
	image.setAttribute('src', images[index]);
}
*/
buttons[0].addEventListener('click', aboutSec);
buttons[1].addEventListener('click', serviceSec);
buttons[2].addEventListener('click', resumeSec);
buttons[3].addEventListener('click', testimoSec);
buttons[4].addEventListener('click', blogSec);
buttons[5].addEventListener('click', contactSec);

