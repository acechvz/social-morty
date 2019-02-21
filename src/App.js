import React, { Component } from 'react';
import { getPosts } from './api/posts';
import Navbar from './components/Navbar/Navbar';
import Trends from './components/Content/Trends';
import NewPost from './components/Post/NewPost';
import { PostsWithLoading } from './components/Post/FeedPosts';
import Follow from './components/Widgets/Follow';

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
        posts: null,
        isLoadingPosts: false
    }

    this.onDoPost = this.onDoPost.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPosts() {
    this.setState({
      isLoadingPosts: true
    });
    getPosts().then(({data}) => this._isMounted && this.setState({ posts: data, isLoadingPosts: false }));
  }

  onDoPost(post) {
    this.setState({
      posts: [
        post,
        ...this.state.posts
      ]
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchPosts();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { posts, isLoadingPosts } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-3">
                  <Trends />
                </div>
                <div className="col-md-6">
                  <NewPost doPost={ this.onDoPost } />
                  <PostsWithLoading posts={ posts } isLoading={isLoadingPosts} />
                </div>
                <div className="col-md-3">
                  <Follow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
