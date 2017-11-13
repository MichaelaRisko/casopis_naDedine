import React, { Component } from 'react';
import styled from 'styled-components';

let Article = styled.div`
max-width:80%;
margin: 0 auto;
padding-bottom: 3em;

h2{
  text-align: center;
  padding-top: 2em;
}

section{
margin: 0 auto;
max-width: 60%;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
align-items: center;
  p{
    padding: 1em 0;
  }
  img{
    max-width: 100%;
    min-width: 100%;
  }
}
`;

let HeadingPicture = styled.div`
  max-width:100%;
  max-height: 20em;
  background-size: cover;
  overflow: hidden;
  position: relative;

  img{
    position: relative;
    min-width:100%;
    transform: translateY(-10%);
  }

`;

class ArticleComponent extends Component {

  render() {
          console.log(this.props.text[0].picture);
    return (
      <Article>
        <HeadingPicture>{this.props.picture}</HeadingPicture>
        <h2>{this.props.heading}</h2>
        {this.props.text.map((i) => (
          <section>
            <p>{i.part}</p>
            <img src={`${i.picture}`} />
          </section>
        ))}
      </Article>
          );
        }
      }

      export default ArticleComponent;
