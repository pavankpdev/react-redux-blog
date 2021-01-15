// Library
import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

// Redux Action
import { deleteUserAction } from "../Redux/reducer/user/user.action";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  // Redux state
  const reduxState = useSelector(({ user }) => ({ user }));

  // Initialize dispatch hook from react-redux
  const dispatch = useDispatch();

  // Loading all the user list from redux to component
  useEffect(() => {
    setUserList(reduxState.user.user);
  }, [reduxState.user.user]);

  const deleteUser = (e) => {
    dispatch(deleteUserAction(e.target.id));
  };
  return (
    <>
      <div className="d-flex mt-5 flex-wrap">
        {userList.map(({ name, email, id }) => (
          <Col sm="6" key={id}>
            <Card className="shadow mb-3 ">
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
