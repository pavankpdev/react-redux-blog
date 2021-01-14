import React, { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const deleteUser = (e) => console.log(e.target.id);
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        {userList.map(({ name, email, id }) => (
          <Col sm="6" key={id}>
            <Card className="shadow">
              <CardBody>
                <h2>{name}</h2>
                <h4>{email}</h4>
                <Button color="danger" id={id} onClick={deleteUser}>
                  Delete <i className="fas fa-trash-alt" />
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
    </>
  );
};

export default UserList;
