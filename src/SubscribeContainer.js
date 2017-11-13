import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';

let Container = styled.div`
max-width:90%;
margin: 0 auto;
.left{

}
.right{

}
`;

class SubscribeContainer extends Component {


  render() {
    return (
      <Container>
        <form method="GET" action="mailto:risko.michaela@gmail.com" enctype="text/plain">
          <div>Subject</div>
          <input type="text" name="subject" />

          <div>Name</div>
          <input name="Name" />

          <div>E-Mail</div>
          <input name="E-Mail Address" />

          <div>Message</div>
          <textarea name="Message"></textarea>

          <br/>
          <input type="submit" value="Send" />

          <input type="hidden" name="body" />
        </form>
      </Container>
    );
  }
}

export default SubscribeContainer;
