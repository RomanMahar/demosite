import React from 'react';

const CardImage = (props) => {
    if (!props.imageSrc) {
        return null;
    }
	return (   
        <div>
            <img 
                className={"card-img-top img-fluid " + props.heading} 
                src={props.imageSrc} 
                alt={props.imageAlt}
            />
        </div>
	);
};

export { CardImage };
