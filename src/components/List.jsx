var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function() {

        // Create function and pass in text and index indentifiers
        var createItem = function(text, index) {
            // Assign unique keys to each item
            return <ListItem key={index + text} text={text} />;
        };

        // run createItem function for each item in array
        return (<ul>{this.props.items.map(createItem)}</ul>);
    }
});

// Export this for use
module.exports = List;
