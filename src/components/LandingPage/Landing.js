import React from 'react'
import Carousel from './sections/Carousels';
import styled from 'styled-components';


function Landing() {
    return (
        <HomeLanding>
            
                <Carousel /> 
                <Msg> I'm Studying React-native , React , nodeJS, Go, Solidity... </Msg>
            
        </HomeLanding>
    )
}

export default Landing


const HomeLanding = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 350px;
`;

const Msg = styled.h1`
        text-align: center;
        color: red;
`
