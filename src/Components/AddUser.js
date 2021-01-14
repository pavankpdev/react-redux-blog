import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

const AddUser = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
  });

  const updateInputData = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const submit = () => {
    setUserData({
      fullname: "",
      email: "",
    });
  };

  return (
    <>
      <h1 className="mt-5 mb-5 border-bottom border-primary text-primary">
        Add New User
      </h1>

      <FormGroup>
        <Label for="fullname" className="font-weight-600">
          Fullname
        </Label>
        <Input
          type="fullname"
          name="fullname"
          id="fullname"
          value={userData.fullname}
          placeholder="fullname"
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
