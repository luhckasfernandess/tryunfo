import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    // console.log(this.props);
    const { id, labelDescription, type, value, onChange, name, checked } = this.props;
    return (
      <label htmlFor={ id }>
        { labelDescription }
        <input
          name={ name }
          data-testid={ id }
          checked={ checked }
          value={ value }
          onChange={ onChange }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelDescription: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Input;
