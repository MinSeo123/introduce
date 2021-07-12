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
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
        </Carousel>
        
    )
}

export default Carousels
