import React from 'react'
import styled from 'styled-components';

function MiddleHeader() {
    return (
        <div>
            <TitleText href="/">MinSeo's WebPage</TitleText>
        </div>
    )
}

export default MiddleHeader


const TitleText = styled.a`
        user-select: none;
        color: black;
        text-decoration: none;

`;
    