import React from 'react';

const CardAuthor = (props) => {
    if (!props.author) {
        return null;
    }
	return (   
        <div className="card-author row">
            <img className="card-author-image" src={props.author.imageSrc}/>
            <div className="card-author-info">
                <div className="card-author-name">{props.author.name}</div>
                <div>
                    <span className="card-author-user">{props.author.user}</span>
                    <span className="card-author-location">
                        <i class="fas fa-map-marker-alt"></i>
                        {props.author.location}
                    </span>
                </div>
            </div>
        </div>
	);
};

export { CardAuthor };
