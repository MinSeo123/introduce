import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';


function carousel(props) {

    let items = [
        {   img: 'https://minseo-test-1.s3.ap-northeast-2.amazonaws.com/minseo.png',
            name: "hi",
            description: "hi everyone"
        },
        { 
            name: "minseo",
            description: "Hello world!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props)
{ console.log(props)
    return (
        <Paper>
            <div>{props.item.imgUrl}</div>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default carousel
