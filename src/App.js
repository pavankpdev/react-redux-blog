// Library
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

// Components
import Navbar from "./Components/Navbar";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";

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
