/* eslint-disable react/no-unescaped-entities */
import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Description } from '../../components/Description';
import { ReturnButton } from '../../components/ReturnButton';

import { Container } from './styles';

import { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

export function Preview()
{
    const [data, setData] = useState(null);
    
    const navigate = useNavigate();

    const params = useParams();

    function handleReturn()
    {
        navigate(-1);
    }

    useEffect(() => {
        api.get(`/movie_notes/${params.id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                if(error.response)
                    alert(error.response.data.message);
                else
                    alert("Unable to show movie details!");
            })
    }, []);

    return (
        <Container>
            <Header />

            <div className="return-wrapper">
                    <ReturnButton 
                        title='Return'
                        onClick={handleReturn}
                    />
            </div>

            {   data &&
                <main>    
                    <div className='title'>
                        <h1>{data.title}</h1>
                        <Rating 
                            rating={data.rating}
                        />
                    </div>

                    <div className='date'>
                        <FiClock size={20} />
                        <span>{data.created_at}</span>
                    </div>

                    { data.tags &&
                        <div className='tag-wrapper'>
                            {data.tags.map(tag => (
                                <Tag 
                                    key={String(tag.id)}
                                    name={tag.name}
                                />
                            ))}
                        </div>
                    }
                    
                    <Description 
                        content={data.description}
                    />
                </main>
            }
        </Container>
    );
}