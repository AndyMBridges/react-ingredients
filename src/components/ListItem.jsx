// Get dependancies 
var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                {/* Print text for each item in array */}
                <h4>{this.props.text}</h4>
            </li>
        );
    }
});

module.exports = ListItem;
