import React from 'react';

class Results extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <p>{this.props.results}</p>  
      );
    }
}
  
export default Results;
