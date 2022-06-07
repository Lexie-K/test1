import React from 'react'
import styled from 'styled-components'

const CenterViewStyled = styled.main`
  min-height: 80vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;

  gap: 1rem;
`;

// До вопросика - if
// Между вопросиком и двоеточием - если true
// После двоеточия - если false
const Content = styled.section`
  background-color: ${({ color }) => color ? color : 'black'};
  flex-grow: ${({ grow }) => grow ? grow : 1};
  flex: ${({ grow }) => grow ? '' : '1 0 100%'};
`;

const Sections = () => (
  <CenterViewStyled>
    <Content color={'red'} grow={'6'}>Content 1</Content>

    <Content color={'blue'} grow={'10'}>Content 2</Content>

    <Content color={'pink'}>Content 3</Content>
  </CenterViewStyled>
);

export default Sections;
