import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Checkbox';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked.slice()
        }
    }


    handleToggle  = (index) => {
        const checked = this.state.checked;
        const prev = checked.splice(index, 1);
        const edit = !(prev[0]);
        checked.splice(index, 0, edit);
        this.setState(checked);
    }


    render() {
        var questions = this.props.questions.map((question, index) => {
            return (
                <ListItem key={index} role={undefined} dense button onClick={() => this.handleToggle(index)}>
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
            <div>
                <List>
                    {questions}
                </List>
                <br></br>
                <Button variant="contained" color="primary">Get Results</Button>
            </div>
        );
    }
}

export default Quiz