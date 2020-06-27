import React from 'react';
import './App.css';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Quiz from './Quiz.js'


function App() {
  return (
    <div className="App">
      <Container>
        <br></br>
          <Typography variant="h4" align="center" margin-top="10vh">
            Privilege Check
          </Typography>
          <Quiz questions={['q1', 'q2', 'q3', 'q4']} numberQuestions={4}/>
      </Container>
    </div>
  );
}

export default App;
