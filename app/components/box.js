/** @jsx React.DOM */

var React = require('react');

var Box = module.exports = React.createClass({
  getInitialState: function() {
    return {color: 'gray'};
  },

  handleClick: function(){
    var currentColor = this.state.color;
    if (!this.props.isSelected) {
      currentColor == 'gray'
    }
    var newColor = 'gray';
    if (currentColor === 'gray') {
      newColor = 'yellow';
    } else if (currentColor === 'yellow') {
      newColor = 'full-green'
    }
    this.props.onSelect(this.props.position);
    this.setState({color: newColor});
  },

  buildClassName: function() {
    var cn = 'Box';
    cn += ' Box_' + this.props.position;
    if (this.props.isSelected) {
      cn += ' Box_' + this.state.color
    } else {
      cn += ' Box_gray';
      if (this.state.color !== 'gray') {
        setTimeout(function(){
          this.setState({color: 'gray'});
        }.bind(this), 1);
      }
    }

    return cn;
  },

  render: function() {
    return (
      <div
        className={this.buildClassName()}
        onClick={this.handleClick}>
      </div>
    )
  }

});
