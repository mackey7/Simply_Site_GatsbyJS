import React from "react"
import styled from 'styled-components'
import Image from '../../images/landscape.jpg'

const Figure = styled.figure`
width:100%;
height:100%;
position:relative;
`;
const Img = styled.img`
width:100%;
height:100%;
`;

const Title = styled.span`
position:absolute;
color:#fff;
top:45%;
left:45%;
font-size:64px;
font-family:Work Sans;
text-transform:uppercase;
`;

const HeaderImg = (props) => (
    <Figure>
        <Img src={Image} alt="Ladscape" />
        <Title>{props.title}</Title>
    </Figure>

)
export default HeaderImg; 