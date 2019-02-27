import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const NavigationWrapper = styled.ul`
list-style:none;
display:flex;
height:100%;
`;
const NavigationItem = styled.li`
padding:10px 15px;
text-decoration:none;
`;

const StyledLink = styled(Link)`
color:#202124;
opacity:0.5;
text-decoration:none;
font-size:13px;
font-family:Work Sans, bold;
text-transform:uppercase;
font-weight:600;
`;


const Navigation = () => (
    <NavigationWrapper>
        <NavigationItem> <StyledLink
            to="/"
            activeStyle={{ opacity: "1", fontWeight: "700" }}
        >
            Home
    </StyledLink></NavigationItem>


        <NavigationItem> <StyledLink
            to="/Products/"
            activeStyle={{ opacity: "1", fontWeight: "600" }}
        >
            Products
    </StyledLink></NavigationItem>


        <NavigationItem> <StyledLink
            to="/About/"
            activeStyle={{ opacity: "1", fontWeight: "600" }}
        >
            About
    </StyledLink></NavigationItem>


        <NavigationItem> <StyledLink
            to="/Contact/"
            activeStyle={{ opacity: "1", fontWeight: "600" }}
        >
            Contact
    </StyledLink></NavigationItem>
    </NavigationWrapper >
)
export default Navigation;