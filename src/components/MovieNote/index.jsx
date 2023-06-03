/* eslint-disable react/prop-types */
import { Container } from "./style";

import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';

export function MovieNote({data, ...rest}){
    
    const { title, rating, content, tags } = data;

    return (
        <Container
            {...rest}
        >
            <h2>{title}</h2>
            {rating && <Rating rating={rating} isAtHome />}
            <p>{content}</p>
            {tags && 
                <footer>
                    {tags.map(tag => <Tag key={tag.id} name={tag.name} isAtHome />)}
                </footer>
            }
        </Container>
    );
}