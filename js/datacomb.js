//
//
// Datacomb interface class

//
"use strict";

// Deps
var ScrollableTable = require('smart-table-scroll');

//
var defaults = { };

//
var Datacomb = function(opts) {
  console.log('init\'d Datacomb...');
  if(!opts.el) { throw new Error("Need to pass `el` into Datacomb."); }
  if(!opts.data) { throw new Error("Need to pass `data` into Datacomb."); }

  // inherit from options, defaults
  for(var key in defaults) { this[key] = defaults[key]; }
  for(var key in opts) { this[key] = opts[key]; }

};

//
module.exports = Datacomb;
