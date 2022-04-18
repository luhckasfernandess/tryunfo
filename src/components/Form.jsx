import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    let hasTrunfoValidate;
    if (hasTrunfo === true) {
      hasTrunfoValidate = (<p>Você já tem um Super Trunfo em seu baralho</p>);
      // Eu tive um erro de lint com as chaves e o else, da uma olhada nessa doc da próxima: https://eslint.org/docs/2.0.0/rules/brace-style
      // Funcionou mas ainda não está legal, deveria ser cobrado CSS da gente e deveríamos ter mais tempo para estilizar
    } else {
      hasTrunfoValidate = (
        <Input
          name="cardTrunfo"
          id="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          labelDescription="É Super Trunfo"
        />
      );
    }

    return (
      <div>
        <form>
          <Input
          // Faltava apenas passar os nomes com as props necessárias, consegui via ajuda no Slack
          // Souce: https://trybecourse.slack.com/archives/C02T5FNGN07/p1649715282660049
            name="cardName"
            type="text"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
            labelDescription="Nome da carta"
          />
          <Input
            name="cardDescription"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            type="textarea"
            labelDescription="Descrição da carta"
          />
          <Input
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            labelDescription="Atributo 1"
          />
          <Input
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            labelDescription="Atributo 2"
          />
          <Input
            name="cardAttr3"
            id="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            labelDescription="Atributo 3"
          />
          <Input
            name="cardImage"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            labelDescription="Imagem da carta"
          />
          <Select value={ cardRare } onChange={ onInputChange } />
          {hasTrunfoValidate}
          <Button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
