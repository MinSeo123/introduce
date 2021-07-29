import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
        <ContactMsg>
            <h1> E-mail : zzoo852@gmail.com </h1>
            <h1> Phone : 010-xxxx-xxxx</h1>
        </ContactMsg>
    )
}

export default Contact

const ContactMsg = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;

`