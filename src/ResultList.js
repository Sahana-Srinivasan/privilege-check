import React from 'react';
import './App.css'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class ResultList extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      
      const defined = this.props.one !== undefined;
      let reslist1 = this.props.one;
      let reslist2 = this.props.two;
      let reslist3 = this.props.three;
      let reslist;
      if (defined) {

        reslist = 
        <List>
            <ListItem key={0} role={undefined} button onClick>
                <ListItemText id={0} primary={this.props.one}/>
            </ListItem>
            <ListItem key={1} role={undefined} button onClick>
                <ListItemText id={1} primary={this.props.two}/>
            </ListItem>
            <ListItem key={2} role={undefined} button onClick>
                <ListItemText id={2} primary={this.props.three}/>
            </ListItem>

        </List>


      }


    
      const incomplete = <div id="incomplete">
        <div id="blurb">
          <Typography variant="h4" align="center" margin-top="10vh">
            <div id="message">
            Take the quiz to find your results!
            </div>
          </Typography>
        </div>
      </div>
  
      const results =  <div id="results-page">
            <div>
              {reslist}
            <br></br>
            </div>
      </div>
      return (
        <div>
         <div>{defined && results}</div>
        </div>
      );
    }
}
  
export default ResultList;
