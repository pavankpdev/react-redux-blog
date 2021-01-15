// Redux Action to add new user
export const addUserAction = ({ name, email }) => {
  return {
    type: "ADD_USER",
    payload: { name, email, id: `${Math.random()}` },
  };
};

// Redux Action to delete existing user
export const deleteUserAction = (userID) => {
  return {
    type: "DELETE_USER",
    payload: userID,
  };
};
