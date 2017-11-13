import React, { Component } from 'react';
import styled from 'styled-components';
import pic from './info.jpg';
import text from './logo.png';
import PictureComponent from './PictureComponent';

let Container = styled.div`
.two{
  display: flex;
  flex-direction: row;
  justify-content: center;
  .PictureComponent{
    width:50%;
    img{
      min-width: 100%;
    }
  }
}

.article-pic{
  margin: 0 .15em;
  cursor: pointer;
  span{
    position:absolute;
    z-index:9;
    padding: 3em;
    visibility: hidden;
    overflow: hidden;
  }
}

.article-pic:hover{
  opacity:.8;
  position: relative;
  span{
      visibility: visible;
  }
}

img{
  max-width:100%;
}

`;

class TwoContainer extends Component {

  render() {
    return (
      <Container>
        <section className="two">
          <PictureComponent />
          <PictureComponent />

        </section>
        </Container>
          );
        }
      }

      export default TwoContainer;
