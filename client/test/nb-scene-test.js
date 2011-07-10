// Tests for the scene module.

module("Scene");

test("Scene evaluation should return 42", function() {
    var scene = new nb.scene.Scene();
    var result = scene.evaluate();
    equals(result, 42, "Evaluated scene should return 42.");
});
