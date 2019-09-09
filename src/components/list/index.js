import React from 'react';

import { Container } from './styles';
import Card from '../card';

import { MdAdd } from 'react-icons/md';

export default function list({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color='#FFF' />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card, index) => <Card key={card.id} index={index} data={card} />)}
      </ul>
    </Container>
  );
}
