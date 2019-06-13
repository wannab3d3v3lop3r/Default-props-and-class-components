import React from 'react';
import './List.css';
import {STORE} from '../store';
import Card from './Card';

export default function List(props) {

    const cards = props.cards.map((card, index) => {
        if(STORE.allCards[card]) {
            return <Card 
                    key={index} 
                    title={STORE.allCards[card].title} 
                    content={STORE.allCards[card].content}
                   />
        }
    })

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cards}
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    )
}
