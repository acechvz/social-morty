import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

        const { post } = this.props;

        this.state = {
            likes: post.likes || 0,
            shares: post.shares || 0,
            comments: post.comments || 0,
            likeDone: false,
            shareDone: false,
            commentDone: false
        };

        this.likeAction = this.likeAction.bind(this);
        this.shareAction = this.shareAction.bind(this);
        this.commentAction = this.commentAction.bind(this);
    }

    likeAction(e) {
        e.preventDefault();
        if( !this.state.likeDone )
            this.setState({
                likes: this.state.likes + 1,
                likeDone: true
            });
    }
    
    shareAction(e) {
        e.preventDefault();
        if( !this.state.shareDone )
            this.setState({
                shares: this.state.shares + 1,
                shareDone: true
            })
    }
    
    commentAction(e) {
        e.preventDefault();
        if( !this.state.commentDone )
            this.setState({
                comments: this.state.comments + 1,
                commentDone: true
            })
    }

    render() {
        const { likeDone,
                shareDone,
                commentDone,
                likes,
                shares,
                comments } = this.state;

        const { post } = this.props;

        return (
            <div className="feed-post">
                <div className="media align-items-center">
                    <img src={post.author_image} className="image image--relative mr-3" alt="" />
                    <div className="media-body">
                        <h6 className="mt-0">{post.author_name}</h6>
                        <small>Hace { post.time ? `${post.time} minutos` : 'unos instantes' } </small>
                    </div>
                </div>
                <div className="mt-4 mb-5 feed-post__text">
                    {post.text}
                </div>
                {
                    post.image &&
                    <img src={post.image} alt="" className="feed-post__image img-fluid" />
                }
                <div className="feed-post__bottom text-center">
                    <div className="row align-items-center">
                        <div className="col">
                            <button>
                                <i className="far mr-1 fa-comment"></i>
                                {comments} Comentarios
                            </button>
                        </div>
                        <div className="col">
                            <button
                                onClick={ this.likeAction }>
                                <i className={"mr-1 " + ( !likeDone ? 'far fa-heart' : 'fas fa-heart' )}></i>
                                {likes} Likes
                            </button>
                        </div>
                        <div className="col">
                            <button>
                                <i className="far mr-1 fa-share-square"></i>
                                {shares} Shares
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;