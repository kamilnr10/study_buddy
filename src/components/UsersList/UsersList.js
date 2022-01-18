import React from 'react';
import { users } from 'data/users';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map(({ name, average, attendace }) => {
          <li>
            <div>{average}</div>
            <div>
              <p>{name}</p>
              <p>{attendance}</p>
            </div>
            <button>X</button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default UsersList;
