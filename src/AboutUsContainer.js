import React, { Component } from 'react';
import styled from 'styled-components';
import pic from './info.jpg';

let AboutUsComponent = styled.div`
max-width:80%;
margin: 0 auto;

section{
  margin: 0 auto;
  padding-bottom: 3em;

  img{
    min-width: 100%;
  }

  h2{
    text-align: center;
  }
}

about{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em 0;

  article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2em;
    min-width:50%;
  }
}


`;

class AboutUsContainer extends Component {
  render() {
    return (
      <AboutUsComponent>
        <section className="slovak">
          <img src="http://via.placeholder.com/350x150" alt="" />
          <h2>nieco o casope resp zdruzeni</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>

        <about>
          <img src={pic} alt="" />
          <article>
            <h2>Inga</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
        </about>

        <about>
          <img src={pic} alt="" />
          <article>
            <h2>Domi</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
        </about>

        <about>
          <img src={pic} alt="" />
          <article>
            <h2>Miska</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
        </about>


      </AboutUsComponent>
    );
  }
}

export default AboutUsContainer;
