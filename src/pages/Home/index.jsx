import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieNote } from '../../components/MovieNote';

import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';

export function Home(){
    const [search, setSearch] = useState("");
    const [movieNotes, setMovieNotes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/movie_notes?title=${search}`)
            .then(response => {
                setMovieNotes(response.data);
            })
            .catch(error => {
                if(error.response)
                    alert(error.response.data.message);
                else
                    alert("Unable to fetch the movie notes");  
            })
    }, [search]);

    return(
        <Container>
            <Header 
                onChange={e => setSearch(e.target.value)}
            />

            <div className="wrapper">
                <h1>My movies</h1>
                <Link to="/new">
                    <Button title="Add movie" icon={FiPlus} isAtHome/>
                </Link>
            </div>

            <main>
                {
                    movieNotes.map(movieNote => (
                        <MovieNote
                            key={String(movieNote.id)} 
                            data={movieNote}
                        />
                    ))
                }
            </main>
        </Container>
    );
}