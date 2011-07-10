// Nodeblocks JSON API.
// Executes all the calls to the nodeblocks server.
// TODO: The API calls do not make server requests but return dummy data.

// Global namespace.
var nb = nb || {};

// API namespace.
nb.api = {};

// Public: list the available nodes using the data view.
// 
// callback - The function to call when the JSON call has succeeded.
//
// The data structure looks like this:
//     [
//         {
//             id: "nb.geo.circle",
//             displayName: "Circle",
//             category: "Primitives",
//             description: "Draw a circle."
//          }
//     ]
// Note that the list is not hierarchical. It is up to you to regroup it
// according to category.
//
// Returns a data structure containing a list of node descriptions.
nb.api.listNodes = function(callback) {
    callback([
         {
            id: "nb.geo.circle",
            displayName: "Circle",
            category: "Primitives",
            description: "Draw a circle."
        },
        {
            id: "nb.geo.rect",
            displayName: "Rectangle",
            category: "Primitives",
            description: "Draw a rectangle."
        },
        {
            id: "nb.data.csv",
            displayName: "CSV",
            category: "Data",
            description: "Load data from a CSV file."
        }   
    ]);
};
