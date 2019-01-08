import React, { Component } from 'react';
import user from './../../userdata';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxCharacters: 150,
            postText: ''
        };

        this.onWritePost = this.onWritePost.bind(this);
        this.doPost = this.doPost.bind(this);
    }

    // Methods
    onWritePost(e) {
        this.setState({
            postText: e.target.value
        });
    }
    
    charactersLeft(){
        return this.state.maxCharacters - this.state.postText.length;
    }

    doPost(e) {
        const { doPost } = this.props;
        e.preventDefault();

        if ( this.charactersLeft() < 0 ) return;

        let post = {
            author_image: user.image,
            author_name: user.name,
            text: this.state.postText,
            likes: 0,
            comments: 0,
            shares: 0,
            postId: '_' + Math.random().toString(36).substr(2, 9),
            time: 0
        };

        this.setState({
            postText: ''
        });

        doPost( post );
    }

    render() {
        const { maxCharacters, postText } = this.state;

        // const { doPost } = this.props;
        return (
            <div className="block new-post">
                <div className="new-post__content">
                    <img src={ user.image } alt="" className="image" />
                    <div className="text">
                        <textarea
                            name="post-text"
                            cols="30"
                            rows="10"
                            placeholder="Wubba Lubba Dub Dub!"
                            className={ 'form-control ' + (this.charactersLeft() < 0 ? 'is-invalid' : '') }
                            onChange={ this.onWritePost }
                            value={ postText }>
                        </textarea>
                        <div className="text-right">
                            <br />({ this.charactersLeft() })
                        </div>
                    </div>
                </div>
                {   postText.length > 0 &&
                    <div className="new-post__actions">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <ul className="list">
                                    <li>
                                        <a href="#" title="Adjuntar imagen"> <i className="far fa-image"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Emojis">
                                            <i className="far fa-grin-tongue"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Marcar como algo">
                                            <i className="far fa-flag"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Programar publicacion">
                                            <i className="far fa-calendar-check"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-right">
                                <a  href="#"
                                    className={"button " + ( this.charactersLeft() < 0 ? 'disabled' : '' )}
                                    onClick={ this.doPost }
                                    >Post</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default NewPost;