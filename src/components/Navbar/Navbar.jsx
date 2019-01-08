import React, { Component } from 'react';
import user from './../../userdata';
import Search from './Search';
import Profile from './Profile';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        
        return (
            <div className="navigation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="navigation__nav">
                                <div className="row">
                                    <div className="col">
                                        <img src="img/react.png" alt="Logo" className="navigation__logo" />
                                    </div>
                                    <div className="col col-md-8">
                                        <Search />
                                    </div>
                                    <div className="col">
                                       <Profile
                                            name={ user.name }
                                            image={ user.image }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;