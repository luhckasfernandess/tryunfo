import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

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
      savedList: [],
    };
  }

  onSaveButtonClick() {
    // Desestruturando de novo para acessar o state, lembre-se de testar se funciona desestruturando com escopo global Lucas
    // Não faço agora pq estou concentrado e ñ quero perder meu raciocínio aqui, segunda já começa outro projeto. Let's go!
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    // Salvando cada carta em um formato de objeto
    const savedCart = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    // Estou usando o parâmetro rest para pegar o meu estado anterior, no caso o meu array savedList, e adicionar nele as cartas no formato de objeto
    this.setState((prevState) => ({
      savedList: [...prevState.savedList, savedCart],
      // E já estou limpando o formulário como pede o README na mesma cajadada
      // Funciona? Yes...let's go, go, go
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // Como o setState é assíncrono para garantir o correto funcionamento devo chamar a minha função aqui no setState
    // Apenas quando a entrada for alterada -> Source: https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
    this.setState({ [name]: value }, () => { this.validateSaveButton(); });
  }

  validateSaveButton() {
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
      savedList,
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
          buttonEvent={ this.buttonEvent }
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
        <CardList savedList={ savedList } />
      </div>
    );
  }
}

export default App;
