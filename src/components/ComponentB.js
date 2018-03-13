import React, { Component } from 'react';
class ComponentB extends Component {
constructor(props){
    super(props);
    this.state = {
      youCanNameMeWhateverTwo : 0
    }
  }
  handleClick(e){
    e.preventDefault();
    this.props.propC();
  }
  render(){
    return(
    <div>
      <h1>I am Component B!</h1>
      <input type="submit" onClick={(e)=>this.handleClick(e)} />
    </div>
    )
  }
}
export default ComponentB;
