import React, { Component } from 'react';
import './App.css';
import Form from './components/form.js'

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    giphyname: '',
    giphyimage: '',
    search: '',
  }
  this.fetchAPI = this.fetchAPI.bind(this);
}

fetchAPI(res) {
  let search = res;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=tt59MI4q4zQA4P24YXAQEN6iL7GQq3EN&q=${search}&limit=25&offset=0&rating=G&lang=en`

  fetch(url)
    .then( res => res.json())
    .then( res =>{
      this.setState(prevState => ({
        giphyname: res.data[0].title,
        giphyimage: res.data[0].embed_url,
      }))
      })

    }

handleSubmit(e){
  e.preventDefault()
}


render() {
  let image = this.state.giphyimage
  console.log(image)
    return (
      <div>
        <h1>Giphy Creator</h1>
       <Form
        fetchAPI = {this.fetchAPI}
       />
      <h1> {this.state.giphyname}</h1>
      <iframe src={ image } title = "title"/>
      </div>
    );
  }
}

/* WORKING - APP AS THE ONLY COMPONENT
class App extends Component {
constructor(props){
  super(props)
  this.state = {
    giphyname: '',
    giphyimage: '',
    search: '',
  }
}

fetchAPI(res){
  let search = this.state.search
  let url = `https://api.giphy.com/v1/gifs/search?api_key=tt59MI4q4zQA4P24YXAQEN6iL7GQq3EN&q=${search}&limit=25&offset=0&rating=G&lang=en`
  fetch(url)
    .then( res => res.json() )
    .then( res =>{
      this.setState(prevState => ({
        giphyname: res.data[0].title,
        giphyimage: res.data[0].embed_url,
      }))
      })
    }


handleSubmit(e){
  e.preventDefault()
  this.fetchAPI()
}

handleChange(e){
  this.setState(
  {search: e.target.value})
}

render() {
  let image = this.state.giphyimage
  console.log(image)
    return (
      <div>
        <h1>Giphy Creator</h1>
       <form>
          <input onChange={(e) => this.handleChange(e)}/>
          <button onClick={(e) => this.handleSubmit(e)}>
          Submit
          </button>
        </form>
      <h1> {this.state.giphyname}</h1>
      <iframe src={ image } />
      </div>
    );
  }
}
*/
export default App;
