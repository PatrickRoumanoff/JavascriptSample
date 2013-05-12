/*global test, ok, equal, strictEqual, fizzBuzz */

(function () {
	"use strict";
	test("1 is 1", function () {
		strictEqual(fizzBuzz(1), "1", "Passed!");
	});
	test("7 is 7", function () {
		strictEqual(fizzBuzz(7), "7", "Passed!");
	});
	test("3 is Fizz", function () {
		strictEqual(fizzBuzz(3), "Fizz", "Passed!");
	});
	
	test("5 is Buzz", function () {
		strictEqual(fizzBuzz(5), "Buzz", "Passed!");
	});

	test("15 is FizzBuzz", function () {
		strictEqual(fizzBuzz(15), "FizzBuzz", "Passed!");
	});
	
	test("13 is Fizz", function () {
		strictEqual(fizzBuzz(13), "Fizz", "Passed!");
	});

	test("52 is Buzz", function () {
		strictEqual(fizzBuzz(52), "Buzz", fizzBuzz(52) + " should be Buzz");
	});

	test("53 is FizzBuzz", function () {
		strictEqual(fizzBuzz(53), "FizzBuzz", "Passed!");
	});

	test("35 is FizzBuzz", function () {
		strictEqual(fizzBuzz(35), "FizzBuzz", "Passed!");
	});
}());