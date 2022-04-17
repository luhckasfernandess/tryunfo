import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    // console.log(this.props);
    const { id, labelDescription, type, value, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        { labelDescription }
        <input
          data-testid={ id }
          name={ name }
          // checked={ checked }
          // Source: https://trybecourse.slack.com/archives/C02T5FNGN07/p1649715282660049
          value={ value } // defaultValue tip from https://pt.stackoverflow.com/questions/301886/input-n%C3%A3o-permite-digitar
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
  // checked: PropTypes.bool.isRequired,
};

export default Input;
