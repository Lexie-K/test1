import React from 'react';
import styled from 'styled-components';

const CenterViewStyle = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 80vh;
  flex: 1;
`;
const Content1Style = styled.section`
  background-color: rgb(32, 128, 32);
  flex-grow: 6;
`;
const Content2Style = styled.section`
  background-color: rgb(78, 190, 255);
  flex-grow: 10;
`;
const LastContentStyle = styled.section`
  background-color: #ffc0cb;
  flex: 1 0 100%;
`;

function Sections() {
  return (
    <CenterViewStyle>
      <Content1Style>Content 1</Content1Style>
      <Content2Style>Content 2</Content2Style>
      <LastContentStyle>Content 3</LastContentStyle>
    </CenterViewStyle>
  );
}

export default Sections;
