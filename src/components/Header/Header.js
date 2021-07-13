import React from 'react'
import styled from "styled-components";
import LeftHeader from "./sections/LeftHeader";
import MiddleHeader from "./sections/MiddleHeader";
import RightHeader from "./sections/RightHeader";


function Header() {
    return (
        <HeaderComponent>
            <LeftHeader />
            <MiddleHeader />
            <RightHeader />
        </HeaderComponent>
    )
}

export default Header


const HeaderComponent = styled.div`
        display:flex;
        justify-content: space-between;
        background-color: white;
        padding: 15px 15px;
        font-size: 20px;
        font-weight: 800;
        

`;