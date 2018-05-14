import React from 'react';

const CardTags = (props) => {
    if (!props.tags) {
        return null;
    }
    return (
        <div className="tags">
            {props.tags.map((tag, i) => 
                <span key={i} className="badge badge-pill badge-primary">{tag}</span>
            )}
            {props.medallion ? <span className="badge medallion">{props.medallion}</span> : ''}
        </div>
    );
};

export { CardTags };
