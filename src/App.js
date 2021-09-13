import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListMoviesComponent from './components/ListMoviesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMovieComponent from './components/CreateMovieComponent';
import UpdateMovieComponent from './components/UpdateMovieComponent';
import ViewMovieComponent from './components/ViewMovieComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route path = "/" exact component = {ListMoviesComponent}></Route>
              <Route path = "/movies" component = {ListMoviesComponent}></Route>
              <Route path = "/add-movie" component = {CreateMovieComponent}></Route>
              <Route path = "/update-movie/:id" component = {UpdateMovieComponent}></Route>
              <Route path = "/view-movie/:id" component = {ViewMovieComponent}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;


