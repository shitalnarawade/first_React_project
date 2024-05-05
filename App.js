import React, { useState} from 'react';
import NewUsers from'./Componets/Users/NewUsers';
import UserList from './Componets/Users/UserList';


function App() {
  const [newUserlist, setUserlist] = useState([]);
  const newUserHandler=(uName, uAge) =>{
    setUserlist(
    [...newUserlist,{name:uName, age : uAge}]
    );
  //  console.log(newUserlist, " Hello");
  }
  return (
    <div>
         <NewUsers onNewUser={newUserHandler} />
         <UserList  users={newUserlist}/>
      {/* <Card>
        <NewUsers onNewUser={newUserHandler} />
         <userList  users={userlist}/>
      </Card> */}

    </div>
  );
}

export default App;
