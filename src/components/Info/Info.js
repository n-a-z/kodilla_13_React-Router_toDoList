import React from 'react';
import Container from '../Container/Container';
import {infoContents} from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <h2>Info</h2>
    <p>
      {infoContents.description}
    </p>
  </Container>
);

export default Info;
