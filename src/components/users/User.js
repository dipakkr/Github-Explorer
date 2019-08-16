import React from 'react';
import UserItem from './UserItem';

const User = (props) => {

        return(
            <div style={userStyle}>
                {props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    margin : '20px',
    gridGap : '1rem'
}

export default User;