import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pic from './info.jpg';
import text from './logo.png';
import PictureComponent from './PictureComponent.js';

let Container = styled.div`
max-width:90%;
margin: 0 auto;
padding-bottom:2em;

.row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;

  .test {
    flex:1;
  }
}

`;

class PeopleContainer extends Component {
  render() {
    return (
      <Container>
        <section className="row">
          <Link to="/clanok1" className={'test'}>
          <PictureComponent
            picture={ <img src={pic} alt="" /> }
            heading={'a'}
            text={'casopis na dedine je super'}
            />
          </Link>
          <Link to="/clanok1" className={'test'}>
          <PictureComponent
            picture={ <img src={pic} alt="" /> }
            heading={'a'}
            text={'casopis na dedine je super'}
            />
          </Link>
        </section>

        <section className="row">
          <Link to="/clanok1" className={'test'}>
          <PictureComponent
            picture={ <img src={pic} alt="" /> }
            heading={'a'}
            text={'casopis na dedine je super'}
            />
          </Link>
          <Link to="/clanok1" className={'test'}>
          <PictureComponent
            picture={ <img src={pic} alt="" /> }
            heading={'a'}
            text={'casopis na dedine je super'}
            />
          </Link>
        </section>

      </Container>
          );
        }
      }

export default PeopleContainer;
