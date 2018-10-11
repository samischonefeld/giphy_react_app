import React, { Component } from 'react';

class Form extends Component{
constructor(props){
  super(props)
  this.state = {
    search: ''
  }}

handleSubmit(e){
  e.preventDefault();
  let search = this.state.search;
  this.props.fetchAPI(search);

}

handleChange(e){
  this.setState(
  {search: e.target.value})
  console.log(this.state.search)
}

  render(){
    return(
        <form>
          <input onChange={e => this.handleChange(e)}/>
          <button onClick={e => this.handleSubmit(e)}>
          Submit
          </button>
        </form>
      )
  }
}


export default Form;
