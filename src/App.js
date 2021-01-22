import React from 'react';
import './App.css';

function Header(props) {
  return (
    <header className="div-header" >
      <h1 className='mainhead'>Movies List  App</h1>
      <h3> Number of list  Movies: {props.movielist.length}</h3>

    </header>
  );
}


function Footer(props) {
  return (
    <footer className='div-footer'>
      <small>{props.txt}</small>
    </footer>
  )
}


function Movie(props) {
  return (
    <li>
      <h4> Name: {props.movie.name}</h4>
      <p> <b> Type:</b> {props.movie.type}</p>
      <p> <b> Rate : </b> {props.movie.rate}</p>
    </li>
  )
}


function MovieList(props) {
  return (
    <main className="main">
      <h2>Movies List</h2>
      <div className='uol'>
      <ul>
        {props.movielist.map(ele => <Movie movie={ele} />)}
      </ul>
      </div>
    </main>
  )
}


class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "", type: "", rate: ""
    };

    this.handleChange = this.handleChange.bind(this); // Configuration
    // this.handleChange = this.handleChange.bind(this); // Configuration
    // this.handleChange = this.handleChange.bind(this); // Configuration

    this.handleSubmit = this.handleSubmit.bind(this); // Configuration
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label> {this.props.label1}<br/>
          <input type="text" id='movieName' onChange={this.handleChange}></input>
        </label>
        <br/>
        <label> {this.props.label2}<br/>
          <input type="text" id='movieType' onChange={this.handleChange}></input>
        </label><br/>
        <label> {this.props.label3}<br/>
          <input type="range"  max={10} min={1} id='movieRate' onChange={this.handleChange}></input><br/>
        </label>

        <input type="submit" value="Add" />
      </form>
    )
  }

  handleChange(event) {
   
    this.setState({
      name:document.getElementById('movieName').value,
      type:document.getElementById('movieType').value,
      rate:document.getElementById('movieRate').value
      
    });

  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state.name.id=='movie-type');
    console.log(event.target.movieType.value);
    this.props.onMovieCreate(this.state);
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      moviedict: [

        {
          id: 1, name: 'Big Hero 6', type: 'Animation ', rate: 7.5
        }, {
          id: 2, name: 'Harry Potter and the Sorcerer Stone', type: 'Adventure ', rate: 7.5
        }, {
          id: 3, name: 'Escape Plan 2: Hades', type: 'action ', rate: 3.8
        }]
    }
    this.handleCreateMovie = this.handleCreateMovie.bind(this);
  }


  handleCreateMovie(movie) {

    let all = this.state.moviedict;
    all.push({
       id: all.length+1 , name: movie.name, type:movie.type ,rate:movie.rate})
    this.setState({ snacks: all });
  }

  render() {
    return (
      <div className="App">
        <Header movielist={this.state.moviedict}  />
        <MovieList  movielist={this.state.moviedict}/>
        <h1>Would you like to add a new Movie to list? </h1>
        <MovieForm label1="Add Name"  label2="Add Type" label3="Add Rate" onMovieCreate={(movie) => this.handleCreateMovie(movie)} />
        <Footer txt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
      </div>
    );
  }
}

export default App;