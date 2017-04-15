<! 1) Write a function that returns a random number in range 0-n>
function random(n) {
     return Math.floor((Math.random() * (n + 1)));
}

<! 2) Write a function that returns a string of random letters of length n>
// this function returns a random letter from A-Z
function randomLetter() {
	// this is a string of possible letters (characters) we could return
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
	// this is a random number between 0 and 25
	var rnum = Math.floor(Math.random() * chars.length);
	// this finds the character which corresponds to that number
	var randomLetter = chars.substring(rnum, rnum+1);
	// this returns the random letter
	return randomLetter;
}

function randomString(n) {
	var s = "";
     var i;
	for(i=0;i<n;i++) {
		s = s.concat(randomLetter());
	}
	return s;
}

<! 3) a function that returns the sum of the numbers 0-n >
function sumToN(n) {
	var sum = 0;
     var i;
	for(i=0;i<=n;i++) {
		sum += i;
	}
	return sum;
}

<! 4) function that returns the sum of every second number from 0-2n 
Example: sumSeconds(5) will give us 0+2+4+6+8+10 = 30 
Note that this function prints to the page to show what's going on, but technically the only thing that's required in the loop is the sum +=i line.>

function sumSeconds(n) {
	var sum = 0;
     var i;
	for(i=0;i<=2*n;i+=2) {
		document.write(i);
		document.write("<br />");
		sum += i;
	}
	return sum;
}

<! 5) function that returns the sum of every number from (k*10^0) to (k*10^(k-1)), where k = n%10.> 
function sumPowers(k) {
	var n = k % 10;
	var sum = 0;
     var i;
	for(i=1;i<=n;i++) {
		sum += i*Math.pow(10,n-i);
	}
	return sum;
}

<! 6) a function called arraySum that returns the sum of an array >
var array = [2,2,10,0,50,1900,25,25];
arraySum(array);
function arraySum(arr) {
	var sum = 0;
     var i;
	for(i=0;i<arr.length;i++) {
		sum += arr[i];
	}
	return sum;
}

<! 7) function that returns an array of length n populated with random numbers from 0-9 >
function random(n) {
     return Math.floor((Math.random() * (n + 1)));
}
function random1DArray(n) {
	var arr = [];
     var i;
	for(i=0;i<n;i++) {
		arr[i]=random(9);
	}
	return arr;
}

<! 8) function that takes an array and prints out the numbers to the DOM.>
function print1DArray(arr) {
     var i;
	for(i=0;i<arr.length;i++) {
		document.write(" " + arr[i] + " ");
	}
}

<! 9) function that returns a two dimensional array of length and height n populated with random number from 0-9.
function random2DArray(n) {
	var arr = [];
     var i;
	for(i=0;i<n;i++) {
		var a = [];
		for(j=0;j<n;j++) {
			a[j] = random(9);
		}
		arr[i] = a;
	}
	return arr;
}
function random(n) {
     return Math.floor((Math.random() * (n + 1)));
}

<! 10) function that takes a two dimensional array and prints out the numbers to the DOM using document.write(). Your HTML page should have a square of numbers >
function print2DArray(arr) {
     var i;
	for(i=0;i<arr.length;i++) {
		for(j=0;j<arr[i].length;j++) {
			document.write(arr[i][j] + " ");
		}
		document.write("<br />");
	}
}
