import React from 'react';
import './App.css';
import List from './components/List';
import { STORE } from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      store: STORE
    }
  }

  handleAddCard = listId => {
    console.log(`Add Button has been clicked. Id is`,listId)
    let newCard = newRandomCard();
    const newList = this.state.store.lists.map(list => {
      if(list.id === listId){
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        }
      }
      return list;
    });

    this.setState({
      store: {
        lists: newList,
        allCards: {
          ...this.state.store.allCards,
        [newCard.id]: newCard
        }
      }
    })
  }

  handleDeleteCard = cardId => {
    console.log(`Delete Button has been clicked. Id is`,cardId)
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  }

  render() {
    const lists = this.state.store.lists.map((list,index) => {
      return <List 
                key={list.id}
                id={list.id}
                header={list.header} 
                cards={list.cardIds.map(id => this.state.store.allCards[id])}
                handleAddCard={this.handleAddCard}
                handleDeleteCard={this.handleDeleteCard}
              />
    })
    
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists}
        </div>
      </main>
    )
  }
}

export default App
