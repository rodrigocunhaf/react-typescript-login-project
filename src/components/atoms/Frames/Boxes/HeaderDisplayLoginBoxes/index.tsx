import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ListInputs = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ListInputsItems = styled.li`
  display: flex;
  gap: 0.5rem;
`;

export { Container, ListInputs, ListInputsItems };
