import React from 'react';

import { Container } from './styles';
import { loadLists } from '../../services/api';
import List from '../list';

const lists = loadLists();

export default function board() {
  return (
    <Container>
      {lists.map(list => <List key={list.title} data={list} />)}
    </Container>
  );
}
