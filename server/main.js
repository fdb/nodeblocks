var http = require("http");

// Global namespace.
var nodeblocks = nodeblocks || {};

// Views namespace.
nodeblocks.views = {};

nodeblocks.views.hello = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><strong>Hello</strong></html>");
    response.end();
};

nodeblocks.start = function() {
    http.createServer(nodeblocks.views.hello).listen(process.env.C9_PORT);
};

nodeblocks.start();