import React from 'react'
import logoImg from '../../../question.jpg'
import styled from 'styled-components';

function LeftHeader() {
    return (
        <div>
           <a href = "/"> <Logo src={logoImg} /></a>
        </div>
    )
}

export default LeftHeader

const Logo = styled.img `
    height: 50px;
    border-radius: 30px;
    border: none;
`;
