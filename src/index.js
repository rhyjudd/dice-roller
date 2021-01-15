import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
const Header =() =>{
  return <h1>D&D stat generator</h1>;
}

const Stats =() =>{

}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: ""
    }
  }

  render(){
    return  (
      
      <Header />

      
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
