
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
	var okVar = "ok";
    ok( okVar === "ok", 'what will satisfy the ok assertion?');
});

test("not ok", function() {
	var okVar2 = "not ok";
    ok( okVar2 === "not ok", 'what is a false value?');
});

test("equal", function() {
    equal( 2, 1 + 1, 'what will satisfy the equal assertion?');
});
