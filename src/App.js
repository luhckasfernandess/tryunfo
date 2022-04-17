import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: '',
      isSaveButtonDisabled: 'disabled',
    };
  }

  onSaveButtonClick() {
    // Vou ter que desestruturar o state (de novo) para poder usar as props aqui
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    // O lint não me permite usar números mágicos, então tenho que criar constantes, affs
    const min = 0;
    const sum = 210;
    const max = 90;
    if (
      cardName && cardDescription && cardImage && cardRare
      // Meus colegas sugeriram no Whatsapp ler essa documentação e usar o Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
      // É parecido com o parseInt, mas eu teria que usar o radix no caso do parse e eu não conseguiria pôr em uma única linha como fiz abaixo
      && Number(cardAttr1) >= min && Number(cardAttr2) >= min && Number(cardAttr3) >= min
      // Vamos ver se funciona em uma linha só essa lógica
      && Number(cardAttr1) <= max && Number(cardAttr2) <= max && Number(cardAttr3) <= max
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= sum
    ) return this.setState({ isSaveButtonDisabled: false });
    return this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // Como o setState é assíncrono para garantir o correto funcionamento devo chamar a minha função aqui no setState
    // Apenas quando a entrada for alterada -> Source: https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
    this.setState({ [name]: value }, () => { this.onSaveButtonClick(); });
  }

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
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
