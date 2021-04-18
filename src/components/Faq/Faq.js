import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContents } from '../../data/dataStore.js';

const Faq = () => (
  <Container>
    <Hero titleText={faqContents.title} imageUrl={faqContents.image} />
    <p>{faqContents.description}</p>
  </Container>
);

export default Faq;
