import React from 'react';
import './App.css';
import Quiz from './Quiz.js'
import Results from './Results.js'
import questions from './questions.json'
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  }

  updateResults = (results) => {
    this.setState({results});
  }

  render () {
    var array = [];
    for(var i = 0; i < questions.length; ++i) {
        array.push(false);
    }
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={`/`} render={() => 
               <Quiz questions={questions} 
                     numberQuestions={questions.length} 
                     checked={array}
                     sendResults={this.updateResults}/>}/>
            <Route exact path={`/results`} render={() => <Results results={results}/>} />
          </Switch>
        </div>
      </Router>   
    );
  }
}

export default App;
