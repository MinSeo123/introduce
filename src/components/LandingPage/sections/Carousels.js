import React from 'react';
import { Carousel } from 'antd';

function Carousels() {

    const contentStyle = {
        height: '250px',
        fontweight: '900',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'white',
      };
    return (
        <Carousel autoplay>
            <div >
                <h1 style={contentStyle}>Hi, Welcome to My Page</h1>
            </div>
            <div>
                <h2 style={contentStyle}>My Name Is MinSeo</h2>
            </div>
        </Carousel>
        
    )
}

export default Carousels
