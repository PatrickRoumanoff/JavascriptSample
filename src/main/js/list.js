var LIST = {};

(function ($) {
	"use strict";
	$.empty_list = null;
	
	$.prepend = function (el, list) {
		return function (command) {
			if (command === "head") {
				return el;
			} else if (command === "tail") {
				return list;
			}
		};
	};
	
	$.head = function (list) {
		return list("head");
	};
	
	$.tail = function (list) {
		return list("tail");
	};
	
	$.is_empty = function (list) {
		return list === null;
	};
}(LIST));