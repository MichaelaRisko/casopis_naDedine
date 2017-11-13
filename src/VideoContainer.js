import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';

let Container = styled.div`
max-width:80%;
margin: 0 auto;


section{
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom : 2em;

  iframe{
    min-width:50%;
  }

  article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2em;
    min-width:50%;
  }
}
`;

class VideoContainer extends Component {
  render() {
    return (
      <Container>
        <section>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>
          <article>
            <h3>drfgdfg</h3>
            <p>Lorem simply dummy text</p>
          </article>
        </section>

        <section>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>
          <article>
            <h3>drfgdfg</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
        </section>

        <section>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>
          <article>
            <h3>drfgdfg</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
        </section>

      </Container>
    );
  }
}

export default VideoContainer;
