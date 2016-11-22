var React = require('react');
var List = require('./List.jsx');

// Create class object
var ListManager = React.createClass({
    // Function (Method) inside of an object
    // Set state to blank for items array and text variable
    getInitialState: function() {
        return {items: [], newItemText:''};
    },
    // Set state to element value (input value)
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    // Submit function
    handleSubmit: function(e) {
        e.preventDefault();
        // Save current items array
        var currentItems = this.state.items;
        // Add newItem to array
        currentItems.push(this.state.newItemText);
        // Set items state to updated currentItems array
        this.setState({items: currentItems, newItemText:''});
    },
    // Render JSX
    render: function() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {/* Run handleSubmit function on submit */}
                <form onSubmit={this.handleSubmit}>
                    {/* Run onChange function onChange, set value to currentItemText */}
                    <input onChange={this.onChange} value={this.state.newItemText} />
                    <button>Add</button>
                </form>
                {/* Populate list with updated state.items  */}
                <List items={this.state.items} />
            </div>
        );
    }
});

// Export ListManager so it's available in main.jsx
module.exports = ListManager;
