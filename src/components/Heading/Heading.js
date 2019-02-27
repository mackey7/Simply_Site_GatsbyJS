import styled, { createGlobalStyle } from 'styled-components'

const Heading = styled.h1`
font-size:24px;
position:relative;
text-transform:uppercase;
display: inline-block;
::after{
    position:absolute;
    content:' ';
    top:50px;
    left:0px;
    display:block;
    height:2px;
    width:300%;
    background:#202124;
}

`;

export default Heading;