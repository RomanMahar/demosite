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
                    <a href="#">
                        <i class="fas fa-thumbs-up"></i>
                        {props.meta.likes}
                    </a>
                </li>
                <li className="replies meta-data">
                    <a href="#">
                        <i class="fas fa-comment-alt"></i>
                        {props.meta.replies}
                    </a>
                </li>
                <li className="shares meta-data">
                    <a href="#">
                        <i class="fas fa-share"></i>
                        {props.meta.shares}
                    </a>
                </li>
            </ul>
        </div>
	);
};

export { CardMeta };
