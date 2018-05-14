import React from 'react';
import { CardImage } from './CardComponents';

const AdvertCard = (props) => {
	return (   
        <div className={"card advert-card"}>
            <CardImage
                imageSrc={props.imageSrc}
                imageAlt={props.imageAlt}
            />
            <p className="advert-copy">
                {props.title}
            </p>
            <div className="footer">
                <span className="promoted-by">Promoted by</span>
                <span className="advert-logo">
                    <img src={props.promoImageSrc} />
                </span>
            </div>
        </div>
	);
};

export { AdvertCard };
