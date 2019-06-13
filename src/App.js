import React from 'react';
import './App.css';
import List from './components/List';
import { STORE } from './store';

export default function App(props) {

  const lists = props.lists.map((item,index) => {
    return <List 
              key={item.id} 
              header={item.header} 
              cards={item.cardIds}
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
