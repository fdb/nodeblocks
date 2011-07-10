// Nodeblocks scene management.
// This module contains the core algorithms for evaluating a node network.

// Global namespace.
var nb = nb || {};

// Scene namespace.
nb.scene = {};

// Construct a new Scene.
// A Scene is the root object of the application. It contains all the nodes and
// knows how to evaluate the whole system.
//
// Returns the Scene object.
nb.scene.Scene = function() {
    this.nodes = [];
    this.connections = [];
};

// Evaluate the scene so that the output of the rendered node becomes available.
nb.scene.Scene.prototype.evaluate = function() {
    return 42;
};

// Construct a new Node.
//
// identifier - The fully qualified name of the node, e.g. "nb.geo.circle".
// evaluator  - The actual operating function of the node.
//
// Returns the Node object.
nb.scene.Node = function(identifier, evaluator) {
    this.identifier = identifier;
    this.evaluator = evaluator;
};