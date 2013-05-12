/*global test, ok, LIST, strictEqual, throws */

(function () {
	"use strict";
	test("emptyList is empty", function () {
		ok(LIST.is_empty(LIST.empty_list), "Passed!");
	});
	test("one element is not empty", function () {
		ok(!LIST.is_empty(LIST.prepend("a", LIST.empty_list)), "Passed!");
	});
	test("head is first element", function () {
		strictEqual(LIST.head(LIST.prepend("a", LIST.empty_list)), "a", "first is a");
	});
	test("tail is empty", function () {
		ok(LIST.is_empty(LIST.tail(LIST.prepend("a", LIST.empty_list))), "first is a");
	});
	test("unsupported command", function () {
		strictEqual(LIST.prepend("a", LIST.empty_list)("tete"), undefined, "is undefined");
	});

}());