import React from 'react';
import { CardHeading, CardImage, CardMeta, CardTags, CardAuthor } from './CardComponents';

const CardItem = (props) => {
    const {cardType, heading, headingCategory, imageSrc, imageAlt, title, text } = props;
	return (   
        <div className={"card " + cardType}>
            <CardHeading 
                heading={heading}
                headingCategory={headingCategory} 
            />
            <CardImage
                imageSrc={imageSrc}
                imageAlt={imageAlt}
            />
            <div className="card-body">
                <CardTags 
                    tags={props.tags}
                    medallion={props.medallion}
                />
                <h4 className="card-title">{title}</h4>
                <CardMeta
                    meta={props.meta}
                />
                <p className="card-text">{text}</p>
                <CardAuthor
                    author={props.author}
                />
            </div>
        </div>
	);
};

export { CardItem };
