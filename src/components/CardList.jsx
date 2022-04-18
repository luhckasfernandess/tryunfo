import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const {
      // Listas dos cartões salvos
      savedList,
    } = this.props;

    return (
      <div>
        {savedList.map((element) => (
        // Criar a lista dos cards salvos percorrendo o array com map
        // Tentei desestruturar os elementos mas não deu certo, eu sei que dá, veja isso quando tiver folga
          <section key={ element.cardName }>
            <Card
              cardName={ element.cardName }
              cardDescription={ element.cardDescription }
              cardAttr1={ element.cardAttr1 }
              cardAttr2={ element.cardAttr2 }
              cardAttr3={ element.cardAttr3 }
              cardImage={ element.cardImage }
              cardRare={ element.cardRare }
              cardTrunfo={ element.cardTrunfo }
            />
          </section>
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  savedList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
