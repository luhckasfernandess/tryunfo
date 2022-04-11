import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <label htmlFor="rare-input">
        Qual a raridade?
        <select name="raridade" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

export default Select;
