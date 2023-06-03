import { Container } from "./styles";

import { AddTag } from '../../components/AddTag';
import { Header } from '../../components/Header';
import { ReturnButton } from '../../components/ReturnButton';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function NewMovie()
{
    return (
        <Container>
            <Header />

            <div className="wrapper">
                <div className='return-wrapper'>
                    <ReturnButton title='Return' href="/"/>
                </div>
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