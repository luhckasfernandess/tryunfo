import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  render() {
    return (
      <div>
        <Input
          id="name-input"
          type="text"
          labelDescription="Nome da carta"
        />
        <Input
          id="description-input"
          type="textarea"
          labelDescription="Descrição da carta"
        />
        <Input
          id="attr1-input"
          type="number"
          labelDescription="Atributo 1"
        />
        <Input
          id="attr2-input"
          type="number"
          labelDescription="Atributo 2"
        />
        <Input
          id="attr3-input"
          type="number"
          labelDescription="Atributo 3"
        />
        <Input
          id="image-input"
          type="text"
          labelDescription="Imagem da carta"
        />
        <Select />
        <Input
          id="trunfo-input"
          type="checkbox"
          labelDescription="É Super Trunfo"
        />
        <Button />
      </div>
    );
  }
}

export default Form;
