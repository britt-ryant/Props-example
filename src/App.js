
//********* THE PARENT OF THIS COMPONENT IS INDEX.JS, THERE HAVE BEEN NO PROPS PASSED FROM INDEX.JS THEREFORE THIS.PROPS IS CURRENTLY UNDEFINED!!!!!  ************************


//This goes at the top of all of your Components
import React, { Component } from 'react';

//Any time you want to use another Component (<ComponentA />, <ComponentB />, or <ComponentC />) you need to add these statements!!!!

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

//this is the declaration of the class which is the Component

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      youCanNameMeWhatever : "And I am being given Value Whatever",
    }
  }
  render() {
    return (
      // I am not rendering anything hardcoded in this Component, I am just linking to the pieces (<ComponentA />, <ComponentB />, and <ComponentC />) which will insert whatever is in that particular component, in the <div></div> at the location that, that particular component is called.

      //I can pass data into a component using props.  I will pass data into <ComponentA /> for instructional purposes. I can either hard code data as a prop (propA) or I can use the value stored in state to pass it through (propB).
      <div>
          <ComponentA propA={10} propB={this.state.youCanNameMeWhatever}/>
          <ComponentB />
          <ComponentC />
      </div>
    );
  }
}

export default App;
