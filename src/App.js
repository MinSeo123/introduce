import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/ContactPage/Contact";
import Detail from "./components/DetailPage/Detail";
import styled from "styled-components";


function App() {
  return (
    <MainComponents>

      <Header/>

      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact}/>
        <Route path="/detail" component={Detail}/>

      </div>

      <Footer/>

    </MainComponents>
  );
}

export default App;


const MainComponents = styled.div`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between; 
          height: 100vh;
`;