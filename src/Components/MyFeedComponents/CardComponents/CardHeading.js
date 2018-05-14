import React from 'react';

const CardHeading = (props) => {
    if (!props.heading) {
        return null;
    }
    let bgColorClass = "";
    switch (props.headingCategory) {
        case 'technology':
            bgColorClass = "lilac";
            break
        case 'practice management':
            bgColorClass = "salmon";
            break
        default:
            bgColorClass = "";
    }
	return (   
        <div className={"card-heading " + bgColorClass}>
            <span className="blog">{props.heading}</span><span className="bullet"> • </span><span className="category-name">{props.headingCategory}</span>
        </div>
	);
};

export { CardHeading };
