import React from 'react';

const Account = (props) => {
	return (
        <div className="account-info">
            <img className="account-img" src={props.imageSrc} />
            <span className="account-name">
                {props.accountName}
                <i class="fas fa-caret-down"></i>
            </span>
        </div>
	);
};

export { Account };
