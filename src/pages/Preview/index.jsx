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

import { format, parseISO, add } from 'date-fns';

export function Preview()
{
    const [data, setData] = useState(null);
    const [createdAt, setCreatedAt] = useState("");
    const [loading, setLoading] = useState(true);

    
    const navigate = useNavigate();

    const params = useParams();

    function handleReturn()
    {
        navigate(-1);
    }

    function handleDate(createdAt)
    {
        const parsedDate = parseISO(createdAt);
        const zonedDate = add(parsedDate, { hours: -3 } )
        const formattedDate = format(zonedDate, "MMM dd, yyyy 'at' hh:mm aaa");
        setCreatedAt(formattedDate);
    }

    async function handleDelete()
    {
        const confirm = window.confirm('Do you really want to delete this movie?');
        if(confirm)
        {
            setLoading(true);
            await api.delete(`/movie_notes/${params.id}`);
            setLoading(false);
            navigate("/");
        }
    }

    useEffect(() => {
        api.get(`/movie_notes/${params.id}`)
            .then(response => {
                setData(response.data);
                handleDate(response.data.created_at);
                setLoading(false);
            })
            .catch(error => {
                if(error.response)
                    alert(error.response.data.message);
                else
                    console.log(error);
                    alert("Unable to show movie details!");
            })
    }, []);

    return (
        <Container>
            <Header 
                isLoading={loading}
            />

            <div className="button-wrapper">
                    <ReturnButton 
                        title='Return'
                        onClick={handleReturn}
                        isLoading={loading}
                    />

                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={loading}
                    >
                        Delete movie
                    </button>
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
                        <span>{createdAt}</span>
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