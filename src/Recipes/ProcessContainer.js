import React, { Component } from 'react';
import styled from 'styled-components';
import ArticleRowComponent from './ArticleRowComponent.js';



class ProcessContainer extends Component {
  constructor(){
    super();
    this.state = {
      text: [
        {
        "part":"Lording verLording versions of Lorem Ipsum.Lording versions of Lorem Ipsum.Lording versions of Lorem Ipsum.sions of Lorem Ipsum.",
        "picture":"/img/info.jpg"

      },
        {
        "part":"Lording versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"
      },
        {
        "part":"LordLording versions of Lorem Ipsum.ing versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"
      },
        {
        "part":"Lording versions of Lorem Ipsum.",
        "picture":"/img/info.jpg"
        }
      ]
    }
  }




  render() {
    return (
      <div>
      <ArticleRowComponent
      picture={<img src="http://via.placeholder.com/350x150" alt="" />}
       heading={'heading for you'}
       text={this.state.text}
      />
      </div>

          );
        }
      }

export default ProcessContainer;
