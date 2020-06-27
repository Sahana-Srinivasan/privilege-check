import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: []
        }
    }


    handleToggle  = (index) => {
        const checked = this.state.checked.slice();
        const prev = checked.splice(index, 1);
        const edit = !prev;
        checked.splice(index, 0, edit[0]);
        this.setState(checked);
    }

    componentDidMount() {
        var array = [];
        for(var i = 0; i < this.props.numberQuestions; ++i) array.push(false);
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
                    <ListItemText id={`checkbox-list-label-${index}`} primary={question}/>
                </ListItem>

            );
        })

        return (
            <List>
                {questions}
            </List>
        );
    }
}

export default Quiz