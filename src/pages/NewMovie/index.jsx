import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { AddTag } from '../../components/AddTag';
import { TextArea } from '../../components/TextArea';
import { ReturnButton } from '../../components/ReturnButton';

import { Container } from "./styles";

import { useState } from 'react';

export function NewMovie()
{
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag()
    {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(tagToRemove)
    {
        setTags(prevState => prevState.filter(tag => tag !== tagToRemove));
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
                    />
                    <Input
                        type="number" 
                        placeholder="Rating (from 0 to 5)"
                        className="roboto" 
                    /> 
                </div>

                <TextArea placeholder="Comments"/>

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
                        <Button title="Save changes"/>
                    </div>
                </footer>
            </main>
        </Container>
    );
}