import React, { Component } from 'react';
import styled from 'styled-components';
import ArticleColumnComponent from './ArticleColumnComponent.js';
import pic from '../img/info.jpg';

class ArticleContainer extends Component {
  constructor(){
    super();
    this.state = {
      text: [
        {
        "part":"Lording versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"

      },
        {
        "part":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"
      },
        {
        "part":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"
      },
        {
        "part":"Loblishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"
      },
        {
        "part":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"
        }
      ]
    }
  }




  render() {
    return (
      <div>
      <ArticleColumnComponent
      picture={<img src="http://via.placeholder.com/350x150" alt="" /> }
       heading={'heading for you'}
       text={this.state.text}
      />
      </div>

          );
        }
      }

export default ArticleContainer;
