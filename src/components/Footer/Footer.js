import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterText>
            Thank you for visiting My Page
        </FooterText>
    )
}

export default Footer


const FooterText = styled.div`
    font-size: 20px;
    color: black;
    text-align: center;
    border: 1px solid black;
    
`;