var fizzBuzz = function (n) {
	"use strict";
	var multipleOf, contains, isFizz, isBuzz, is;
	
	multipleOf = function (a, n) {
		return a % n === 0;
	};
	
	contains = function (a, n) {
		return a.toString().indexOf(n.toString()) >= 0;
	};

	is = function (m) {
		return function (n) {
			return multipleOf(n, m) || contains(n, m);
		};
	};
	
	isFizz = is(3);
	isBuzz = is(5);
	
	if (isBuzz(n) && isFizz(n)) {
		return "FizzBuzz";
	}
	if (isFizz(n)) {
		return "Fizz";
	}
	if (isBuzz(n)) {
		return "Buzz";
	}
	
	return n.toString();
};