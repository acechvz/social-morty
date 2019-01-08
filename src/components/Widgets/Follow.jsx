import React, { Component } from 'react';

const PATH_API = 'https://rickandmortyapi.com/api';
const PATH_CHARACTERS = '/character';

class Follow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: null
        }

        this.setSuggestedFollow = this.setSuggestedFollow.bind(this);
    }

    setSuggestedFollow( profiles ) {
        this.setState( { profiles } );
    }

    getUsername( character ) {
		return `${character.name.toLowerCase().replace(" ","")}${character.id}`;
    }
    
    componentDidMount() {
        let charactersIds = '[';
        for (var i = 2; i >= 0; i--) {
            charactersIds += Math.floor((Math.random() * 250) + 1);
            if (i !== 0) {
                charactersIds += ',';
            }
        }
        charactersIds += ']';

        fetch( `${PATH_API}${PATH_CHARACTERS}/${charactersIds}` )
        .then( res => res.json() )
        .then( result => this.setSuggestedFollow( result ) );
    }

    render() {
        const { profiles } = this.state;

        return (
            <div className="block follow-widget">
                <h5 className="mb-4">A quién seguir</h5>
                {
                    profiles && profiles.map( profile => 
                        <div className="follow-widget__item" key={ profile.id } >
                            <div className="media">
                                <img className="mr-3 image" src={ profile.image } />
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">{ profile.name }</h6>
                                    <small>@{ this.getUsername( profile ) }</small>
                                </div>
                            </div>
                        </div>
                    ) 
                }
            </div>
        );
    }
}

export default Follow;