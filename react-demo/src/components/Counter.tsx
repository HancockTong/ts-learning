import * as React from "react";

interface IProps{
  name:string,
}


export default class CounterComponent extends React.Component<IProps>{
  state = {
    number:0
  }
  render(){
    return(
      <div>
        <p>{this.state.number}</p>
        <p>{this.props.name}</p>
        <button onClick={()=>this.setState({number:this.state.number + 1})}>+</button>
      </div>
    )
  }
}
