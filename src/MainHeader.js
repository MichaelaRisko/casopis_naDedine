import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import { Link } from 'react-router-dom';

let Header = styled.div`
margin: 2em auto;
max-width: 80%;

img{
  margin: 0 20% 0 20%;
  max-width: 60%;
}

ul{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: .5em 0;
  list-style-type: none;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-transform: uppercase;
}

a{
  text-decoration: none;
  font-size: 1.1em;
  color: black;
  font-family: 'Playfair Display', serif;
}

li{
  transition: all .2s ease-in-out;
  display: inline;
}

li:hover{
  color:red;
  transform:scale(1.1);

}

 @media (max-width: 680px) {

   ul{
     visibility: hidden;
   }

}


`;


class MainHeader extends Component {
  render() {
    return (

        <Header>
          <div><Link to="/novinky"><a href="#"><img src={logo} alt="logo" /></a></Link></div>
              <nav>
                <ul>
                  <li><Link to="/slovensko"><a href="#">slovensko</a></Link></li>
                  <li><Link to="/ludia"><a href="#">ludia</a></Link></li>
                  <li><Link to="/recepty"><a href="#">recepty</a></Link></li>
                  <li><Link to="/video-zona"><a href="#">video zona</a></Link></li>
                  <li><Link to="/o-nas"><a href="#">o nas</a></Link></li>
                  <li><Link to="/predplatne"><a href="#">predplatne</a></Link></li>
                </ul>
              </nav>
            </Header>
          );
        }
      }

      export default MainHeader;
