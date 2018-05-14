import React from 'react';

const CardMeta = (props) => {
    if (!props.meta) {
        return null;
    }
	return (
        <div className="card-meta">
            <span className="card-date meta-data">{props.meta.date}</span>
            <ul className="card-social">
                <li className="likes meta-data">
                    <i class="fas fa-thumbs-up"></i>
                    {props.meta.likes}
                </li>
                <li className="replies meta-data">
                    <i class="fas fa-comment-alt"></i>
                    {props.meta.replies}
                </li>
                <li className="shares meta-data">
                    <i class="fas fa-share"></i>
                    {props.meta.shares}
                </li>
            </ul>
        </div>
	);
};

export { CardMeta };
