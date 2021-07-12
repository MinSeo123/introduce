import React from 'react'
import Carousel from './sections/Carousels';
import styled from 'styled-components';


function Landing() {
    return (
        <HomeLanding>
            
                <Carousel /> 
            
        </HomeLanding>
    )
}

export default Landing


const HomeLanding = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 350px;
`;
