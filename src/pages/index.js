import React from "react"
import { createGlobalStyle } from 'styled-components'
import '../components/layout.css'

import TopMenu from '../components/TopMenu/TopMenu.js'
import Navigation from '../components/Navigation/Navigation.js'
import Logo from '../components/Logo/Logo.js'
import Wrapper from '../components/Wrapper/Wrapper.js'
import HeaderImg from '../components/HeaderImg/HeaderImg.js'
import Main from '../components/Main/Main.js'
import Heading from '../components/Heading/Heading.js'
import Row from '../components/Row/Row.js'
import Picture from '../components/Picture/Picture.js'
import TextConatiner from '../components/TextConatiner/TextConatiner.js'
import SEO from "../components/seo"
import flovers from '../images/flovers.jpg'
import skates from '../images/skates.jpg'

const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
}
`;

const leftStyle = {
  marginLeft: '10%'
};
const rightStyle = {
  marginRight: '10%'
};

export default () => (
  <Wrapper>
    <SEO title="Main Page" />
    <header>
      <TopMenu>
        <Logo> logo</Logo>
        <Navigation></Navigation>
      </TopMenu>
      <HeaderImg title={"home"}></HeaderImg>
    </header>
    <Main>
      <Heading>who we are </Heading>
      <Row>
        <Picture img={flovers} alt={"flovers"} float={"left"} />
        <TextConatiner style={leftStyle}
          title={"Quisque viverra"}
          paragraf_1={"Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque.Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque, nunc duis ac at elementum dui integer viverra tempus. "}
          paragraf_2={"Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra. Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora aliquet."}
        />


      </Row>
      <Row>
        <TextConatiner style={rightStyle}
          title={"Quisque viverra"}
          paragraf_1={"Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque.Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque, nunc duis ac at elementum dui integer viverra tempus. "}
          paragraf_2={"Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra. Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora aliquet."}
        />



        <Picture img={skates} alt={"skates"} float={"right"} />
      </Row>

    </Main>




  </Wrapper>
)


