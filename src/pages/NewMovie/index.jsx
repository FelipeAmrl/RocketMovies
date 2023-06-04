import { Container } from "./styles";

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { AddTag } from '../../components/AddTag';
import { TextArea } from '../../components/TextArea';
import { ReturnButton } from '../../components/ReturnButton';

export function NewMovie()
{
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
                        <AddTag  value="react"/>
                        <AddTag  placeholder="New Tag" isNew/>
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