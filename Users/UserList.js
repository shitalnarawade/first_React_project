import React from 'react';
import Card from '../UI/Card';
import './UserList.css';

function UserList(props) {
  return (
   
        <Card className="input  users">
            <ul>
            {props.users.map((user) => {
                return (<li>
                    {user.name}({user.age} years old)
                </li>)
            })}
            </ul>
        </Card>
      
    // </div>
  )
}

export default UserList
