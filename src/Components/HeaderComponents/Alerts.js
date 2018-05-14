import React from 'react';

const Alerts = (props) => {
	return (
        <div className="alerts">
            <i className="alerts-icon icon far fa-bell"></i>
            <span className="alerts-number">
                {props.alertsNumber}
            </span>
        </div>
	);
};

export { Alerts };
