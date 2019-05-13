var Ending = React.createClass({
  render: function(){
    var ending = this.props.ending;
    return <p className={ending.code}>{ending.text}</p>
  }
});
