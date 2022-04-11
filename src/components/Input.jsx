import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    console.log(this.props);
    const { id, labelDescription, type } = this.props;
    return (
      <label htmlFor={ id }>
        { labelDescription }
        <input data-testid={ id } type={ type } />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelDescription: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
