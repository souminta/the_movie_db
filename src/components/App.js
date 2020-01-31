import React,{Component} from 'react';
import Navbar from "./Navbar";
import SearchData from "./SearchData";
import LastestMovie from "./LastestMovie";
//import MvList from './MvList.js';
const url = "https://api.themoviedb.org/3/movie/latest?api_key=c523b5af41be7ae4b40dafd3654c7a7f&language=en-US";
class App extends Component{
  
      constructor(props){
    super(props)
    this.state = {
      movies: [],
        mv:[]
    }
  }
  componentDidMount(){
  fetch(url)
  .then(res => res.json())
  .then(movies =>{
    this.setState({movies});
    })
  }
  handleSubmit =(e) => {
    e.preventDefault();
    fetch(url)
    .then(res => res.json())
    .then(mv =>{
     this.setState({mv:[mv]});
      }) 
  }
  handleChange =(e) => {
    this.setState({ mv: e.target.value })
  }

render() { 
    const {movies} = this.state;
    
    return(
    <div className="App">
      <Navbar />
      <SearchData handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <LastestMovie mv={this.state.mv} />
       <div>{movies.overview}</div>
      <div className="container">
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
        <div>{movies.title}</div>
          <img src={'${https://api.themoviedb.org/3/movie/{668423}/images?api_key=c523b5af41be7ae4b40dafd3654c7a7f&language=en-US}'} width="100px" height="100px" alt="image"/>
          <img src={'https://image.tmdb.org/t/p/w500//co5jBeCwHerfC0GPvxLH0D4qj5q.jpg'} width="100px" height="200px" alt="image"/>
           <img src={'${https://image.tmdb.org/t/p/w500/${movies.poster_path}}'} width="100px" height="200px" alt="image"/>
          <div>{movies.release_date}</div>
           </div>
          </div>
        </div>
        <div className="col s12 m6 13">{movies.original_title}</div>
    </div>
      );
    }
  }

export default App;

