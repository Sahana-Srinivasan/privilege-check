import React from 'react';
import './App.css';
import Quiz from './Quiz.js'
import Results from './Results.js'
import questions from './questions.json'
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  var array = [];
  for(var i = 0; i < questions.length; ++i) {
      array.push(false);
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={`/`} render={() => <Quiz questions={questions} numberQuestions={questions.length} checked={array}/>}/>
          <Route exact path={`/results`} render={() => <Results/>} />
        </Switch>
      </div>

    </Router>   
  );
}

export default App;
