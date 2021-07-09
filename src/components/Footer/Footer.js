import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterText>
            welcome to my home ~ 
        </FooterText>
    )
}

export default Footer


const FooterText = styled.div`
    font-size: 20px;
    color: red;
    text-align: center;
    border: 1px solid black;
    
`;