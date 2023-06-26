import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieNote } from '../../components/MovieNote';

import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';

export function Home(){
    const [search, setSearch] = useState("");
    const [movieNotes, setMovieNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    function handleDetails(id)
    {
        navigate(`/preview/${id}`);
    }

    useEffect(() => {
        api.get(`/movie_notes?title=${search}`)
            .then(response => {
                setMovieNotes(response.data);
                setLoading(false);
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
                isLoading={loading}
            />

            <div className="wrapper">
                <h1>My movies</h1>
                
                <Button 
                    title="Add movie" 
                    icon={FiPlus} 
                    isAtHome 
                    isLoading={loading}
                    onClick={() => navigate("/new")}
                />
            </div>

            {   movieNotes &&
                <main>
                {
                    movieNotes.map(movieNote => (
                        <MovieNote
                            key={String(movieNote.id)} 
                            data={movieNote}
                            onClick={() => handleDetails(movieNote.id)}
                        />
                    ))
                }
                </main>
            }
        </Container>
    );
}