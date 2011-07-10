// Nodeblocks user interface.

// Global namespace.
var nb = nb || {};

// UI namespace.
nb.ui = {};

// Public: Initialize the main user interface.
// This function gets called whenever document loading has finished.
//
// Returns nothing.
nb.ui.init = function() {
    this.initTabs();
    this.initLibrary();
};

// Initialize the main panel's tabs.
// Creates the click behaviour.
//
// Returns nothing.
nb.ui.initTabs = function() {
    $('.tab-header a').click(function() {
        // Make the current tab active.
        $('.tab-header a').removeClass('active');
        $(this).addClass('active');
        // Make the associated tab view visible.
        $('.tab').hide();
        var tabName = $(this).attr('href');
        $(tabName).show();
        // 
    });
};

// Initialize the node library.
// This loads in a list of nodes from the server and displays it in a tree.
//
// Returns nothing.
nb.ui.initLibrary = function() {
    nb.api.listNodes(function(data) {
        $(data).each(function(index, node) {
            $('.library .root').append('<li><a href="#" title="' + node.description + '">' + node.displayName + '</a></li>');
        });
    });
};