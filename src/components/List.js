import React from 'react';
import './List.css';
import Card from './Card';

export default function List(props) {

    const cards = props.cards.map((card, index) => {
        return <Card 
                    key={index}
                    id={card.id}
                    title={card.title} 
                    content={card.content}
                    handleDeleteCard={props.handleDeleteCard}
                />
        
    })

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cards}
                <button type="button" className="List-add-button" onClick={e => props.handleAddCard(props.id)}>
                + Add Random Card
                </button>
            </div>
        </section>
    )
}
