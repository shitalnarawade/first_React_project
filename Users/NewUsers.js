import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Errorcomp from "../UI/Errorcomp";
import "./NewUsers.css";

function NewUsers(props) {
  const [enterUserName, setenterUserName] = useState("");
  const [enterUserAge, setenterUserAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and Age",
      });
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  Age (> 0)",
      });
      return;
    }
    // console.log(enterUserName, enterUserAge);
    props.onNewUser(enterUserName, enterUserAge);
    setenterUserName("");
    setenterUserAge("");
    // setenterUserName(event.target.value)
  };
  const userNameChangeHandler = (event) => {
    setenterUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setenterUserAge(event.target.value);
    // console.log(enterUserAge);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <Errorcomp
          title={error.title}
          message={error.message}
          onConform={errorHandler}
        ></Errorcomp>
      )}
      <Card className="input card">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enterUserName}
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enterUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default NewUsers;
