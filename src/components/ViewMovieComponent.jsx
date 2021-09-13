import React, { Component } from 'react'
import MoviesService from '../services/MoviesService'

class ViewMoviesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            movie: {}
        }
    }

    componentDidMount(){
        MoviesService.getMovieById(this.state.id).then( res => {
            this.setState({movie: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View movie details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Movie title: </label>
                            <div> { this.state.movie.title }</div>
                        </div>
                        <div className = "row">
                            <label> Movie director: </label>
                            <div> { this.state.movie.director }</div>
                        </div>
                        <div className = "row">
                            <label> Movie genre: </label>
                            <div> { this.state.movie.genre }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMoviesComponent