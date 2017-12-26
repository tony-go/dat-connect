(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (__filename,__dirname){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Dat',
  lastName: 'Connecter'
};

var element = _react2.default.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user),
  '!'
);

_reactDom2.default.render(element, document.getElementById('root'));

}).call(this,__dirname + "/" + "app.js",__dirname + "/" + ".")

},{"react":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDdEIsU0FBTyxLQUFLLFNBQUwsR0FBaUIsR0FBakIsR0FBdUIsS0FBSyxRQUFuQztBQUNEOztBQUVELElBQU0sT0FBTztBQUNYLGFBQVcsS0FEQTtBQUVYLFlBQVU7QUFGQyxDQUFiOztBQUtBLElBQU0sVUFDSjtBQUFBO0FBQUE7QUFBQTtBQUNVLGFBQVcsSUFBWCxDQURWO0FBQUE7QUFBQSxDQURGOztBQU1BLG1CQUFTLE1BQVQsQ0FDRSxPQURGLEVBRUUsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBRkYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5mdW5jdGlvbiBmb3JtYXROYW1lKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xuICB9XG4gIFxuICBjb25zdCB1c2VyID0ge1xuICAgIGZpcnN0TmFtZTogJ0RhdCcsXG4gICAgbGFzdE5hbWU6ICdDb25uZWN0ZXInXG4gIH07XG4gIFxuICBjb25zdCBlbGVtZW50ID0gKFxuICAgIDxoMT5cbiAgICAgIEhlbGxvLCB7Zm9ybWF0TmFtZSh1c2VyKX0hXG4gICAgPC9oMT5cbiAgKTtcbiAgXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICBlbGVtZW50LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKTsiXX0=
