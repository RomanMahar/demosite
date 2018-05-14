import React from 'react';
import { FeedItems } from './MyFeedComponents';

// Make component
const MyFeed = () => {
	return (
	<main className="container">
        <h1 className="page-title">My Feed</h1>
        <div className="filters">Filters <i class="fas fa-caret-down"></i></div>
        <FeedItems />
	</main>
	);
};

// Make component available to other parts of app. Export Component
export { MyFeed };
