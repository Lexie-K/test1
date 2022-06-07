import React, { Fragment } from "react";
import Navbar from "../components/StyledPage/Navbar";
import Footer from "../components/StyledPage/Footer";
import Sections from "../components/StyledPage/Sections";
import styled from "styled-components";
import Sidebar from "../components/StyledPage/Sidebar";
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    font-family: 'Outfit', sans-serif;
  }
`

const View = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  flex: 1 0;

  gap: 1rem;   
`

const StyledThird = () => {
  return (
    <Fragment>
      <Global /> 
      <View>
        <Navbar />
        <Sidebar />
        <Sections /> 
        <Footer />
      </View>     
    </Fragment>   
  );  
}

export default StyledThird;