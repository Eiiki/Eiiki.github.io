var React = require('react')
var ReactDOM = require('react-dom')
var Api = require('./api')
var store = require('../../store')

$.fn.api = function() {
  return this.each(function() {
    var options = $(this).data();
    options.store = store;
    ReactDOM.render(React.createElement(Api, options), this);
  });
};

/* Initialize api */
$(document).ready(function() {
  $('[data-api]').api();
});
