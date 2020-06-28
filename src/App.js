import React from 'react';
import './App.css';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Quiz from './Quiz.js'
import questions from './questions.json'


function App() {
  var array = [];
  for(var i = 0; i < questions.length; ++i) {
      array.push(false);
  }
  return (
    <div className="App">
      <Container>
        <br></br>
          <Typography variant="h4" align="center" margin-top="10vh">
            Privilege Check
          </Typography>
          <Quiz questions={questions} numberQuestions={questions.length} checked={array}/>
      </Container>
    </div>
  );
}

export default App;
