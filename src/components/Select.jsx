import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rare-input">
        Qual a raridade?
        <select
          name="rare"
          data-testid="rare-input"
          value={ value }
          onChange={ onChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
