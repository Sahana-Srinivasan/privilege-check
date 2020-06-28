import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from 'react-router-dom';
import questionDict from './questions3.json';
import questions from './questions.json';
import categories from './categories.json'
import reverseDict from './questions2.json'
import { useEffect } from 'react';
import "./App.css"



class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked.slice(),
            postResponse: ""
        }
    }


    handleToggle  = (index) => {
        const checked = this.state.checked;
        const prev = checked.splice(index, 1);
        const edit = !(prev[0]);
        checked.splice(index, 0, edit);
        this.setState(checked);
    }

    submitResults = () => {

        for (var i = 0; i < this.props.numberQuestions; ++i) {
            if (this.state.checked[i]) {
                var question = questions[i];
                var category = questionDict[question];
                categories[category] += 1;
            }
        }
        for (var key in categories) {
            categories[key] = categories[key] / reverseDict[key].length;
        }
        console.log('this is what we sent to flask:');
        console.log(categories);
        console.log('posting to flask');

   
        fetch("/results", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(categories)
            }
            ).then(response => {
                
                return response.json()
            })
            .then(json => {
                console.log("this is the json we got back!")
                console.log(json);
                this.props.sendResults(json);
        });
        


    }


    render() {
        var questions = this.props.questions.map((question, index) => {
            return (
                <ListItem key={index} role={undefined} button onClick={() => this.handleToggle(index)}>
                    <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={this.state.checked[index]}
                          tabIndex={-1}
                          inputProps={{'aria-labelledby': `checkbox-list-label-${index}`}}
                        />
                    </ListItemIcon>
                    <ListItemText id={index} primary={question}/>
                </ListItem>

            );
        })

        return (
            <Container maxWidth="md">
                <div id="quiz">
                    <br></br>
                    <p></p>
                    <Typography variant="h4" align="center" margin-top="10vh">
                        <p></p>
                        Privilege Check
                        <p></p>
                    </Typography>
                    <Typography variant="body1" align="center" margin-top="10vh" margin-left="10vw">
                        <div id="intro">
                        <p></p>
                        Find out where your blindspots are, learn about them, and maybe join a movement.
                        <p></p>
                        </div>
                    </Typography>
                    <List id="list">
                        {questions}
                    </List>
                    <br></br>
                    <div id="link" align="center">
                        <Link to={`/results`} className="btn btn-primary" onClick={this.submitResults}>Get Results</Link>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Quiz