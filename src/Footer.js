import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';

let FooterContainer = styled.div`
max-width: 100%;
background-color: #ffe6e6;
text-align:center;
padding-bottom: .8em;
`;

let FooterComponent = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
img{
  width:10%;
  height:10%;
  margin: 0 2em;
}
ul{
  padding: .5em 1.5em;
  list-style-type: none;
  border-left: 1px solid black;
  text-transform: uppercase;
}

a{
  text-decoration: none;
  font-size: 1em;
  color: black;
  font-family: Courier;
}

li{
  transition: all .2s ease-in-out;
}
li:hover{
  color:red;
    transform:scale(1.1);

}
`;


class MainHeader extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterComponent>
          <img src={logo} alt="logo" />
              <nav>
                <ul>
                  <li><a href="#">kontakt</a></li>
                  <li><a href="#">novinky</a></li>
                  <li><a href="#">chcem podporit</a></li>
                  <li><a href="#">predplatne</a></li>
                </ul>
              </nav>
              <nav>
                <ul>
                  <li><a href="#">kontakt</a></li>
                  <li><a href="#">novinky</a></li>
                  <li><a href="#">chcem podporit</a></li>
                  <li><a href="#">predplatne</a></li>
                </ul>
              </nav>

            </FooterComponent>
            <footer>
<small>&copy; 2017 Michaela Risko</small>
</footer>
            </FooterContainer>
          );
        }
      }

      export default MainHeader;
