import React, {useState,useEffect} from 'react'; 
import {Route,Switch,useParams} from 'react-router-dom';
import Axios from 'axios';
import Home from './pages/home/index'
import Test from './pages/test/index'
import GlobalStyle from './globalStyles'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Test} />

      </Switch>
    </>
  );
}

export default App;
