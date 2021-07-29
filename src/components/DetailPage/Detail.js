import React from 'react'
import styled from "styled-components"

function Detail() {
    return (
        <DetailMsg>
            when i was young... blahbhahbahbhabhabhahbahbㅁㄴㅇㅁㄴㅇ
        </DetailMsg>
    )
}

export default Detail

const DetailMsg = styled.div`
    display: flex;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    flex-direction: column;
    color: blue;
    

`