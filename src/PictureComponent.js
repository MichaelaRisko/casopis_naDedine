import React, { Component } from 'react';
import styled from 'styled-components';
import pic from './info.jpg';
import text from './logo.png';

let Container = styled.div`
margin: 0 .15em;
text-overflow: ellipsis;
overflow: hidden;
.article-pic{
  margin: 0 .05em;
  cursor: pointer;
  span{
    position:absolute;
    z-index:9;
    padding: 3em;
    visibility: hidden;
    overflow: hidden;
  }
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  img{
    min-width: 100%;
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

h2{
  color: black;
  letter-spacing: .05em;
}

p{
  color: black;
}

`;

class PictureComponent extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <Container {...this.props}>
          <section className="article-pic">
            <span>
              <h2>{this.props.heading}</h2>
              <p>{this.props.text}</p>
            </span>
            {this.props.picture}
          </section>
        </Container>
          );
        }
      }

      export default PictureComponent;
