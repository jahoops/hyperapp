;
(function ($) {
  
  $.fn.s = function (name, attributes) {
    "use strict";
    var app = {};
    app.namespaces = [];
    app.stores = [];
    app.events = [];

    var store = {};
    store.values = [];
    store.events = [];
    store.pushq = [];
    store.pullq = [];
    
    var value = {};
    value.source = []; //can be function or value

    var event = {};
    event.source = []

    var source = {};
    source.subscribers = [];



  };
})(jQuery);