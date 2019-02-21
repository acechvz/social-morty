import React, { Component } from 'react';
import classNames from 'classnames';
class Post extends Component {
    constructor(props) {
        super(props);

        const { post } = this.props;

        this.state = {
            likes: post.likes || 0,
            shares: post.shares || 0,
            comments: post.comments || 0,
            doLike: false,
            doShare: false,
            doComment: false
        };
    }


    likeAction = (e) => {
        e.preventDefault();
        if( !this.state.likeDone )
            this.setState((prevState) => {
                const { likes } = prevState;
                return {
                    likes: likes + 1,
                    likeDone: true
                }
            });
        else 
            this.setState((prevState) => {
                const { likes } = prevState;
                return {
                    likes: likes - 1,
                    likeDone: false
                }
            });
    }
    
    shareAction = (e) => {
        e.preventDefault();
        const { shareDone } = this.state;
        if( !shareDone )
            this.setState((prevState) => {
                const { shares } = prevState;
                return {
                    shares: shares + 1,
                    shareDone: true
                }
            })
    }
    
    commentAction = (e) => {
        e.preventDefault();
        const { commentDone } = this.state;
        if( !commentDone )
            this.setState((prevState) => {
                const { comments } = prevState;
                return {
                    comments: comments + 1,
                    commentDone: true
                }
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

        const likeClasses = classNames(
            'mr-1',
            { "far fa-heart": !likeDone },
            { "fas fa-heart": likeDone }
        )

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
                            <a href="#">
                                <i className="far mr-1 fa-comment"></i>
                                {comments} Comentarios
                            </a>
                        </div>
                        <div className="col">
                            <a href="#"
                                onClick={ this.likeAction }>
                                <i className={likeClasses}></i>
                                {likes} Likes
                            </a>
                        </div>
                        <div className="col">
                            <a href="#">
                                <i className="far mr-1 fa-share-square"></i>
                                {shares} Shares
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;