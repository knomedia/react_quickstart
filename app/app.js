/** @jsx React.DOM */

var React = require('react');
var Box = require('./components/box');


var App = module.exports = React.createClass({

  getInitialState: function() {
    return {current: null};
  },

  handleSelect: function(position) {
    this.setState({current: position});
  },

  render: function() {
    var boxes = ['top', 'right', 'bottom', 'left'].map(function(p){
      var selected = this.state.current === p;
      return (
        <Box position={p}
             onSelect={this.handleSelect}
             isSelected={selected}/>
      )
    }.bind(this));
    return (
      <div className='App'>
        {boxes}
      </div>
    )
  }

});
