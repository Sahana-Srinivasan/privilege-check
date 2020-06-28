import React from 'react';

class Results extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      const completed = Object.keys(this.props.results).length !== 0;
      console.log(this.props.results);
      return (
        <div>
            <p>{completed && 'hi we\'ve detected results'}</p>
            <p>{!completed && 'You should fill out the quiz first!'}</p>
        </div>
      );
    }
}
  
export default Results;
