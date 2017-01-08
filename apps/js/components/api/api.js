var React = require('react')
import { initStorage } from '../../redux/actions'
import { connect } from 'react-redux'


var Api = React.createClass({

  getInitialState: function() {
    return {
    }
  },

  componentDidMount: function() {
    const {dispatch} = this.props
    dispatch(initStorage())
  },

  render: function() {
    return (<div>{this.props.init.data}</div>);
  }
});

function mapStateToProps(state) {
  return state;
}

module.exports = connect(mapStateToProps)(Api);
