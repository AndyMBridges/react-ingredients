var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

// Render ListManager class and assign to ingredients element
ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
