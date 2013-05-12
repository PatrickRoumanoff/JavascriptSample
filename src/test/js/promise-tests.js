/*global test, asyncTest, start, ok, fail, strictEqual, $ */

(function () {
	"use strict";

	asyncTest("reject", 2, function () {
		var d = new $.Deferred(),
			p = d.promise();
		p.fail(function (value) {
			strictEqual(d.state(), "rejected", "d is rejected");
			strictEqual(value, "ko", "passed!");
			start();
		});
		d.reject("ko");
	});

	asyncTest("resolve", 2, function () {
		var d = new $.Deferred(),
			p = d.promise();
		p.done(function (value) {
			strictEqual(d.state(), "resolved", "d is resolved");
			strictEqual(value, "ok", "passed!");
			start();
		});
		d.resolve("ok");
	});
	
	asyncTest("double resolve", 2, function () {
		var d1 = new $.Deferred(),
			d2 = new $.Deferred();
		d1.then(function (r) {d2.resolve(r + ":d2"); });
		d2.then(function (value) {
			strictEqual(d2.state(), "resolved", "d2 is resolved");
			strictEqual(value, "d1:d2", "passed!");
			start();
		});
		d1.resolve("d1");
	});
	
	asyncTest("resolve reject", 2, function () {
		var d1 = new $.Deferred(),
			d2 = new $.Deferred();
		d1.then(function (r) {d2.reject(r + ":2d"); });
		d2.then(null, function (value) {
			strictEqual(d2.state(), "rejected", "d2 is rejected");
			strictEqual(value, "d1:2d", "passed!");
			start();
		});
		d1.resolve("d1");
	});

	asyncTest("reject reject", 2, function () {
		var d1 = new $.Deferred(),
			d2 = new $.Deferred();
		d1.then(null, function (r) {d2.reject(r + ":2d"); });
		d2.then(null, function (value) {
			strictEqual(d2.state(), "rejected", "d2 is rejected");
			strictEqual(value, "1d:2d", "passed!");
			start();
		});
		d1.reject("1d");
	});
	
	asyncTest("throw is reject", 2, function () {
		var d1 = new $.Deferred();
		d1.then(function (r) {
			fail("should be rejected");
			start();
		}, function (value) {
			strictEqual(d1.state(), "rejected", "d1 is rejected");
			strictEqual(value, "1d", "passed!");
			start();
		});
		d1.reject("1d");
	});

	asyncTest("fail and then", 2, function () {
		var d1 = new $.Deferred();
		d1.then(null).then(null, function (value) {
			strictEqual(d1.state(), "rejected", "d1 is rejected");
			strictEqual(value, "1d", "passed!");
			start();
		});
		d1.reject("1d");
	});

	asyncTest("fail and fail", 3, function () {
		var d1 = new $.Deferred();
		d1.then(null, function (value) {
			strictEqual(value, "1d");
			return false;
		}).then(null, function (value) {
			strictEqual(d1.state(), "rejected", "d1 is rejected");
			strictEqual(value, false, "passed!");
			start();
		});
		d1.reject("1d");
	});
}());

