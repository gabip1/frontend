

import React, { Component } from 'react';
import MoviesService from '../services/MoviesService';

class ListMoviesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }

        this.addMovie = this.addMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);

    }

    viewMovie(id) {
        this.props.history.push(`/view-movie/${id}`);
    }

    deleteMovie(id) {
        MoviesService.deleteMovie(id).then(res => {
            this.setState({
                movies: this.state.movies.filter(movie => movie.id !== id)
            });
        });
    }

    editMovie(id) {
        this.props.history.push(`/update-movie/${id}`);
    }

    componentDidMount() {
        MoviesService.getMovies().then((res) => {
            this.setState({ movies: res.data });
        });
    }

    addMovie() {
        this.props.history.push('/add-movie');
    }

    render() {
        return (
            <div>
                <br></br>
                <h2 className="text-center">Movies List</h2>
                <div className="row">
                    <button className="btn btn-primary" style={{ width: '150px' }} onClick={this.addMovie}>Add Movie</button>
                </div>
                <br></br>
                <div className="row">

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Movie title </th>
                                <th> Movie director </th>
                                <th> Movie genre </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.movies.map(
                                    movie =>
                                        <tr key={movie.id}>
                                            <td> {movie.title} </td>
                                            <td> {movie.director} </td>
                                            <td> {movie.genre} </td>
                                            <td>
                                                <button onClick={() => this.viewMovie(movie.id)} className="btn btn-info">View</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.editMovie(movie.id)} className="btn btn-info">Edit </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteMovie(movie.id)} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListMoviesComponent;
