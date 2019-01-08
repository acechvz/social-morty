import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Trends from './components/Content/Trends';
import NewPost from './components/Post/NewPost';
import FeedPosts from './components/Post/FeedPosts';
import Follow from './components/Widgets/Follow';

const PATH_BASE = 'http://jsonplaceholder.typicode.com';
const PATH_POSTS = '/posts';
const PATH_COMMENTS = '/comments';

const posts = [
  {
    postId: 1,
    author_image: 'img/user-king-flips.jpg',
    author_name: 'King Flippy',
    image: 'img/rick-morty-2.jpg',
    text: "Because I don't respect therapy; because I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it. And I don't think going to a rented office in a strip mall to listen to some agent of averageness explain which words mean which feelings has ever helped anyone do anything. I think it's helped a lot of people get comfortable and stop panicking, which is a state of mind we value in the animals we eat, but not something I want for myself. I'm not a cow, I'm a pickle... when I feel like it.",
    likes: 12,
    shares: 32,
    comments: 2,
    time: 3
  },
  {
    postId: 2,
    author_image: 'img/user-meeseeks.jpg',
    author_name: 'Mr. Meeseeks',
    image: 'img/rick-morty-3.jpg',
    text: "This is Principal Vagina. No relation. You're growing up fast, Morty. You're going into a great big thorn straight into my ass. I'm not looking for judgement, just a yes or no. Can you assimilate a giraffe? Don't be a baby! You avoid getting shot in real life all the time, Morty! Just do the same thing here and we'll be fine!",
    likes: 21,
    shares: 5,
    comments: 8,
    time: 10
  },
  {
    postId: 3,
    author_image: 'img/user-pickle-rick.jpg',
    author_name: 'Pickle Rick',
    image: 'img/rick-morty-1.jpg',
    text: "Awwww thanks, bitch! Don't break an arm jerking yourself off Morty. Rubber baby buggy bumpers! I'm Mr. Crowbar, and here is my friend, who is also a crowbar!",
    likes: 35,
    shares: 16,
    comments: 14,
    time: 16
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        posts: null
    }

    this.onDoPost = this.onDoPost.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.setPosts = this.setPosts.bind(this);
  }

  fetchPosts() {
    fetch( `${PATH_BASE}${PATH_POSTS}` )
    .then( res => res.json() )
    .then( result => this.setPosts( result ) )
    .catch( error => console.log(error) )
  }

  setPosts( posts ) {
    this.setState({ posts });
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
    // this.fetchPosts();
    this.setState( { posts } )
  }

  render() {
    const { posts } = this.state;

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
                  <FeedPosts posts={ posts } />
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
