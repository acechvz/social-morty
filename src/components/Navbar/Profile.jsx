import React from 'react';

const Profile = ({ name, image }) =>
    <div className="media align-items-center">
        <img src={ image } alt="" className="image image--relative image--small mr-3" />
        <div className="media-body">
            <h6 className="mt-0">{ name }</h6>
        </div>
    </div>

export default Profile;