import React from 'react';

const GroupCard = (props) => {
	return (   
        <div className="card">
            <div className="card-body">
                <h5 className="group-title">{props.groupTitle}</h5>

                <div className="row group-midsection">
                    <div className="col-sm-6">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.members}</p>
                    </div>
                    <div className="col-sm-6">
                        <img className="group-img" src={props.imageSrc} alt={props.imageAlt}/>
                    </div>
                </div>
                <div className="card-footer">
                    {props.children}
                </div>
            </div>
        </div>
	);
};

export { GroupCard };
