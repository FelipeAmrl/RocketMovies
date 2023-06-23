import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { AddTag } from '../../components/AddTag';
import { TextArea } from '../../components/TextArea';
import { ReturnButton } from '../../components/ReturnButton';

import { Container } from "./styles";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export function NewMovie()
{
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [comments, setComments] = useState("");

    const navigate = useNavigate();

    function handleAddTag()
    {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(tagToRemove)
    {
        setTags(prevState => prevState.filter(tag => tag !== tagToRemove));
    }

    function handleNewMovieNote()
    {
        if(!title)
            return alert("Enter the movie title!");
        
        if(!rating)
            return alert("Enter the movie rating!");

        if(rating < 0 || rating > 5)
            return alert("The movie rating must be a number between 0 and 5!");

        if(tags.length === 0)
            return alert("Enter a tag for the movie!");

        api.post("/movie_notes", {
            title,
            description: comments, 
            rating, 
            tags 
        })
        .then(() => {
            alert("Successfully created movie!");
            navigate("/");
        })
        .catch((error) => {
            if(error.response)
                alert(error.response.data.message);
            else
                alert("Unable to create the movie note!");
        })
    }

    return (
        <Container>
            <Header />

            <div className='return-wrapper'>
                <ReturnButton title='Return' to="/"/>
            </div>
            
            <main>
                <h1>New movie</h1>

                <div className="input-wrapper">
                    <Input
                        type="text" 
                        placeholder="Title"
                        className="roboto"
                        onChange={e => setTitle(e.target.value)} 
                    />
                    <Input
                        type="number" 
                        placeholder="Rating (from 0 to 5)"
                        className="roboto"
                        onChange={e => setRating(e.target.value)} 
                    /> 
                </div>

                <TextArea 
                    placeholder="Comments"
                    onChange={e => setComments(e.target.value)} 
                />

                <footer>
                    <h2>Tags</h2>

                    <div className="tag-wrapper">
                        {
                            tags.map((tag, index) => (
                                <AddTag
                                    key={index}  
                                    value={tag}                                   
                                    onClick={() => {handleRemoveTag(tag)}}
                                />
                            ))
                        }
                        <AddTag  
                            value={newTag}
                            placeholder="New Tag" 
                            isNew
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        />
                    </div>

                    <div className="button-wrapper">
                        <Button title="Delete movie" isDelete/>
                        <Button 
                            title="Save changes"
                            onClick={handleNewMovieNote}
                        />
                    </div>
                </footer>
            </main>
        </Container>
    );
}