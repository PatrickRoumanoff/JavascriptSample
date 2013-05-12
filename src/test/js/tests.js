/*global test, ok */

(function () {
	"use strict";
	test("hello test", function () {
		ok("0" + 1 === "01", "Passed!");
	});
	
	test("adding", function () {
		ok(1 + 1 === 2, "this is null");
	});
}());