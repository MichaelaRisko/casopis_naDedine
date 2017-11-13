import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import './App.css';
import MainHeader from './MainHeader.js';
import Footer from './Footer.js';
import AboutUsContainer from './AboutUsContainer.js';
import RecipesContainer from './RecipesContainer.js';
import PeopleContainer from './PeopleContainer.js';
import SlovakContainer from './SlovakContainer.js';
import VideoContainer from './VideoContainer.js';
import SubscribeContainer from './SubscribeContainer.js';
import NewsContainer from './NewsContainer.js';

import ArticleContainer from './Slovakia/ArticleContainer.js';
import ProcessContainer from './Recipes/ProcessContainer.js';

class App extends Component {
render(){


    return (
      <HashRouter>
        <div className="app">
          <MainHeader/>
          <div>
            <Switch>
              <Route exact path="/o-nas" component={AboutUsContainer} />
              <Route exact path="/recepty" component={RecipesContainer} />
              <Route exact path="/ludia" component={PeopleContainer} />
              <Route exact path="/slovensko" component={SlovakContainer} />
              <Route exact path="/predplatne" component={SubscribeContainer} />
              <Route exact path="/video-zona" component={VideoContainer} />
              <Route exact path="/novinky" component={NewsContainer} />

            <Route exact path="/clanok1" component={ArticleContainer} />
            <Route exact path="/clanok2" component={ProcessContainer} />

            </Switch>
          </div>
          <Footer />
        </div>
        </HashRouter>

    );
  }
}
export default App;
