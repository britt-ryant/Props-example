import React, { Component } from 'react';

class ComponentA extends Component {
  render(){
    console.log(this.props)
    //Look at the console to see how the property was passed!
    // propA: 10, propB: "And I am being given Value Whatever"

    //Now you can use this.props to access those vaules by saying:

    // this.props.propA which equals 10 or
    // this.props.propB which equals "And I am being given Value Whatever"

    return(
      <div>
        <h1>I am Component A!</h1>
        <h2>{this.props.propB}</h2>
      </div>
    )
  }
}

export default ComponentA;
