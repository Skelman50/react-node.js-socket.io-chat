import React from 'react';
import './users-collection.css';

const UsersCollection = ({ users, id }) => {
  let className;
  return (
    <div className="chat-users collection">
      {users.map((user, index) => {
        const { name } = user;
        className = user.id === id ? 'collection-item active' : 'collection-item';
        return (
        /* eslint-disable-next-line */
                <a 
                  key={index}
                  className={className}
                >
                  {name}
                </a>
        );
      })}

    </div>
  );
};

export default UsersCollection;
