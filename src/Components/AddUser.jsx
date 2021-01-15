// Library
import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";

// Redux Action
import { addUserAction } from "../Redux/reducer/user/user.action";

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  // Initialize dispatch hook from react-redux
  const dispatch = useDispatch();

  const updateInputData = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const submit = () => {
    dispatch(addUserAction(userData));
    setUserData({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <h1 className="mt-5 mb-5 border-bottom border-primary text-primary">
        Add New User
      </h1>

      <FormGroup>
        <Label for="name" className="font-weight-600">
          name
        </Label>
        <Input
          type="name"
          name="name"
          id="name"
          value={userData.name}
          placeholder="name"
          onChange={updateInputData}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email" className="font-weight-600">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          placeholder="email"
          onChange={updateInputData}
        />
      </FormGroup>
      <Button onClick={submit}>Submit</Button>
    </>
  );
};
export default AddUser;
