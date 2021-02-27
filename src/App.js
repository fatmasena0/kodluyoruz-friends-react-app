import React, {Component} from 'react';
import './App.scss';

import Nav from './Nav/Nav';
import Home from './Home/Home';
import FriendFinder from './FriendFinder/FriendFinder';
import MyProfile from './MyProfile/MyProfile';
import Footer from './Footer/Footer';

class App extends Component {
 
    render () {
    return (
      <div className="App">
        <Nav
          home = 'HOME'
          myProfile = 'MY PROFILE'
        />
        <Home />
        <FriendFinder />
        <MyProfile />
        <Footer />
      </div>
    );
    }
}

export default App;
