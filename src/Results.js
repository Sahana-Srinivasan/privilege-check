import React from 'react';
import './App.css'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ResultList from './ResultList.js'

class Results extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      const completed = Object.keys(this.props.results).length !== 0;
      console.log(this.props.results);
      const keys = Object.keys(this.props.results);
      const resource = this.props.results[keys[0]];
      const list1 = this.props.results[keys[0]];
      const list2 = this.props.results[keys[1]];
      const list3 = this.props.results[keys[2]];
      console.log(resource)
      console.log(typeof list1);
      let res1, res2, res3;
      let url1, url2, url3;
      let res12, res22, res32;
      let url12, url22, url32;
      if (list1 !== undefined) {
        res1 = list1.split('"name": "')[1]
        res1 = res1.split('",')[0]
        console.log(res1);
        if (list1.includes("url")){
          url1 = list1.split('"url": "')[1]
          url1 = url1.split('",')[0]
        }
        if (list1.split("name").length > 2) {
          res12 = list1.split('"name": "')[2]
         res12 = res12.split('",')[0]
         console.log(res12);
        }
 
        if (list1.split("url").length >2) {
          url12 = list1.split('"url": "')[2]
          url12 = url12.split('",')[0]
        }
      }
      console.log(typeof list2);
      console.log(list2);
      if (list2 !== undefined) {
        res2 = list2.split('"name": "')[1]
        res2 = res2.split('",')[0]
        console.log(res2);
        if (list2.includes("url")){
          url2 = list2.split('"url": "')[1]
          url2 = url2.split('",')[0]
        }
        if (list2.split("name").length > 2) {
          res22 = list2.split('"name": "')[2]
          res22 = res22.split('",')[0]
        }
        if (list2.split("url").length >2) {
          url22 = list2.split('"url": "')[2]
          url22 = url22.split('",')[0]
        }
      }
      console.log(list3);
      if (list3 !== undefined) {
        res3 = list3.split('"name": "')[1]
        res3 = res3.split('",')[0]
        console.log(res3);
        if (list3.includes("url")){
          url3 = list3.split('"url": "')[1]
          url3 = url3.split('",')[0]
        }
        if (list3.split("name").length > 2) {
          res32 = list3.split('"name": "')[2]
          res32 = res32.split('",')[0]
        }
        console.log(res32);
        if (list3.split("url").length >2) {
          url32 = list3.split('"url": "')[2]
          url32 = url32.split('",')[0]
        }
      }
      const defined = this.props.results !== undefined;
      let reslist;
      if (res1 !== undefined && res2 !== undefined && res3 !== undefined){
        reslist = 
        <List>
            <ListItem key={0} role={undefined} button >
                <ListItemText id={0} primary={res1} secondary={<a href={url1}>{url1}</a>}/>
            </ListItem>
            <ListItem key={3} role={undefined} button >
                <ListItemText id={0} primary={res12} secondary={<a href={url12}>{url12}</a>}/>
            </ListItem>
            <ListItem key={1} role={undefined} button >
                <ListItemText id={1} primary={res2} secondary={<a href={url2}>{url2}</a>}/>
            </ListItem>
            <ListItem key={4} role={undefined} button >
                <ListItemText id={0} primary={res22} secondary={<a href={url22}>{url22}</a>}/>
            </ListItem>
            <ListItem key={2} role={undefined} button >
                <ListItemText id={2} primary={res3} secondary={<a href={url3}>{url3}</a>}/>
            </ListItem>
            <ListItem key={5} role={undefined} button >
                <ListItemText id={0} primary={res32} secondary={<a href={url32}>{url32}</a>}/>
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
            <div id="results">
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
                We're not going to give you a number based on your life experiences. But we have given some personalized recommendations on action items to take and resources to read. We encourage you to learn more about experiences you might not be aware of due to privilege.
                <p></p>
                </div>
              </Typography>
              {reslist}
            <br></br>
            </div>
      </div>
      return (
        <div>
         <div>{completed && results}</div>
         <div>{!completed && incomplete}</div>
        </div>
      );
    }
}
  
export default Results;
