import React from "react"
import styled from 'styled-components'

const Img = styled.img`
border-radius:10px;
min-width:60%;
`;

const Picture = (props) => (
    <figure>
        <Img src={props.img} alt={props.alt} />
    </figure>
)

export default Picture;

