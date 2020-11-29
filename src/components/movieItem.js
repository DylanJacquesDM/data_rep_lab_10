import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component {

//constructor to bind the method to the instance it is called in
    constructor(){
        super();

        this.deleteMovie = this.DeleteMovie.bind(this);  
    }

    //delete movie method
    DeleteMovie(){
        //e.preventionDefault();
        console.log("Delete: " + this.props.movies._id);

        //calls the server
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>

                    <Card.Body>
                        <blockquote className="blockqoute mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockqoute-footer">
                                {this.props.movie.year}

                            </footer>
                        </blockquote>

                    </Card.Body>
                    <Button variant = "danger" onClick={this.DeleteMovie}> Delete </Button>
                </Card>




            </div>
        );
    }

} 