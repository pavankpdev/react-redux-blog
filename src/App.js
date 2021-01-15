// Library
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

// Components
import Navbar from "./Components/Navbar.jsx";
import UserList from "./Components/UserList.jsx";
import AddUser from "./Components/AddUser.jsx";

function App() {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/add" exact component={AddUser} />
      </Switch>
    </Container>
  );
}

export default App;
