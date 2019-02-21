import React, { Component } from 'react';
import { withLoading } from '../../hoc';
import Post from './FeedPost';

export default class FeedPosts extends Component {
    constructor(props) { 
        super(props);
    }

    render() {
        const { posts } = this.props;

        if( !posts ) return null;

        return (
            <div className="feed block">
                {
                    posts && posts.map( post => 
                        <Post post={ post } key={ post.postId } />
                    )
                }
            </div>
        );
    }
}

export const PostsWithLoading = withLoading(FeedPosts);