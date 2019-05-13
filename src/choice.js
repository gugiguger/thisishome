var Choice = React.createClass({
    onButtonClick: function(to) {
        this.props.changeAdventure(to);
    },
    render: function() {
        var details = this.props.details;
        return (
            <a
                className="button"
                onClick={this.onButtonClick.bind(this, details.to)}
            >
                {details.label}
            </a>
        );
    }
});
