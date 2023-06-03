import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieNote } from '../../components/MovieNote';

export function Home(){

    const content = `
    In 2067, humanity is facing global extinction following a global famine, and has abandoned scientific pursuits such as space exploration. The ex-NASA pilot Joseph Cooperis forced to work as a farmer. Cooper experiences a gravitational anomaly in his daughter Murph's bedroom. He deduces it to be a pattern of GPS coordinates and arrives at a secret NASA facility headed byProfessor Brand. Brand explains to Cooper that they are trying to find an exoplanet capable of supporting life, and that he is working on a gravity equation to provide a way to transport large numbers of people there. He enlists Cooper to pilot an exploratoryspacecraft, the Endurance, with a crew of three scientists: Romilly, Doyle, and Brand’s daughter Amelia. This is humanity's last chance; there are no more resources to mount another expedition. A wormhole has been found near Saturn, enabling the ship to passthrough to another galaxy to search for a new home. On the other side, they investigate three planets orbiting a supermassive black hole, Gargantua, each one previously checked by a NASA scientist-explorer.
    `;

    return(
        <Container>
            <Header />

            <div className="wrapper">
                <h1>My movies</h1>
                <Button title="Add movie" icon={FiPlus} isAtHome/>
            </div>

            <main>
                <MovieNote 
                    data={{
                        title:"Interstellar",
                        content,
                        rating: "4",
                        tags:[
                            {id: 1, name: 'Sci-fi'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Family'},
                        ]
                    }}
                />

                <MovieNote 
                    data={{
                        title:"Interstellar",
                        content,
                        rating: "4",
                        tags:[
                            {id: 1, name: 'Sci-fi'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Family'},
                        ]
                    }}
                />

                <MovieNote 
                    data={{
                        title:"Interstellar",
                        content,
                        rating: "4",
                        tags:[
                            {id: 1, name: 'Sci-fi'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Family'},
                        ]
                    }}
                />
            </main>
        </Container>
    );
}