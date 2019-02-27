import React from "react"
import styled from 'styled-components'

const Article = styled.article`
max-width:30%;
height:100%;
`;

const Title = styled.h2`
font-size:32px;
font-family:'Work Sans',Regular;
color:#202124;
font-weight:100;
margin-bottom:50px;
white-space: nowrap;
text-align:left;
`;

const Paragraph = styled.p`
font-size:14px;
font-family:Helvetica;
color:#A6ADB4;
text-align:left;
`;

const TextConatiner = (props) => (
    <Article style={props.style} >
        < Title >
            {props.title}
        </Title >
        <Paragraph>
            {props.paragraf_1}

        </Paragraph>
        <Paragraph>
            {props.paragraf_2}
        </Paragraph>
    </Article >

)



export default TextConatiner;