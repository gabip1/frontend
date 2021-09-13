import React, { Component } from 'react';
import MoviesService from '../services/MoviesService';

class UpdateMovieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            director: '',
            genre: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDirectorHandler = this.changeDirectorHandler.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
    }

    componentDidMount() {
        MoviesService.getMovieById(this.state.id).then( (res) => {
            let movie = res.data;
            this.setState({title: movie.title,
                director: movie.director,
                genre: movie.genre
            });

        });
    }


    updateMovie = (e) => {
        e.preventDefault();
        let movie = {title: this.state.title, director: this.state. director, genre: this.state.genre};
        console.log('movies => ' + JSON.stringify(movie));

        MoviesService.updateMovie(movie, this.state.id).then( res => {
            this.props.history.push('/movies');
        });
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDirectorHandler= (event) => {
        this.setState({director: event.target.value});
    }

    changeGenreHandler= (event) => {
        this.setState({genre: event.target.value});
    }

    cancel(){
        this.props.history.push('/movies');
    }


    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update movie</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input placeholder="Title" name="title" className="form-control" 
                                            value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Director </label>
                                        <input placeholder="Director" name="director" className="form-control" 
                                            value={this.state.director} onChange={this.changeDirectorHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label>Genre </label>
                                        <input placeholder="Genre" name="genre" className="form-control" 
                                            value={this.state.genre} onChange={this.changeGenreHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateMovie}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UpdateMovieComponent;


/*import React, { Component } from 'react';
import  MoviesService from  '../services/MoviesService';

class UpdateMovieComponent extends Component {
    constructor(props) {
        super(props)

            this.state = {
                id: this.props.match.params.id,
                title: '',
                director: '',
                genre: ''

            }

            this.changeTitleHandler = this.changeTitleHandler.bind(this);
            this.changeDirectorHandler = this.changeDirectorHandler.bind(this);
            this.updateMovie = this.updateMovie.bind(this);

    }

    componentDidMount() {
        MoviesService.getMovieById(this.state.id).then( (res) => {
            let movie = res.data;
            this.setState({title: movie.title,
                director: movie.director,
                genre: movie.genre
            });

        });
    }

    updateMovie = (e) =>{
        e.preventDefault();
        let movie = {title: this.state.title, director: this.state.director, genre: this.state.genre};
        console.log('movie => ' + JSON.stringify(movie));
        console.log('id => ' + JSON.stringify(this.state.id));
        MoviesService.updateMovie(movie, this.state.id).then( res => {
            this.props.history.push('/movies');
        });

    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDirectorHandler= (event) => {
        this.setState({director: event.target.value});
    }

    changeGenreHandler= (event) => {
        this.setState({genre: event.target.value});
    }

    cancel(){
        this.props.history.push('/movies')
    }


    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update movie</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Title </label>
                                    <input placeholder="Enter movie title" name="title" className="form-control"
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Director </label>
                                    <input placeholder="Enter movie director" name="director" className="form-control"
                                        value={this.state.director} onChange={this.changeDirectorHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Genre </label>
                                    <input placeholder="Enter movie genre" name="genre" className="form-control"
                                        value={this.state.genre} onChange={this.changeGenreHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.updateMovie}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default UpdateMovieComponent;*/