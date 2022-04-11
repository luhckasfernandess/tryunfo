import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <input data-testid="save-button" type="button" value="Salvar" />
    );
  }
}

export default Button;
