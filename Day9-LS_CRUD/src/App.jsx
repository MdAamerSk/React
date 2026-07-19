import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  // toggle: Determines whether to show the User Card List (true) or the Form (false)
  const [toggle, setToggle] = useState(true);
  
  // users: Holds the list of all users, initialized with data from LocalStorage (or empty array)
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  // updatedData: Holds the user object that is currently selected for editing (null if creating a new user)
  const [updatedData, setUpdatedData] = useState(null);

  // deleteUser: Deletes a user from state and syncs the changes to LocalStorage
  const deleteUser = (id) => {
    let filterUser = users.filter((val) => {
      return val.id !== id; // Keep all users EXCEPT the one with the matching id
    });
    console.log(filterUser);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser)); // Update LocalStorage so changes persist on refresh
  };

  return (
    <div className="p-3 h-screen flex flex-col gap-4 text-white">
      <Navbar setToggle={setToggle} setUpdatedData={setUpdatedData} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem) => {
            return (
              <Usercard
                setUpdatedData={setUpdatedData}
                deleteUser={deleteUser}
                key={elem.id}
                user={elem}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form
            updatedData={updatedData}
            setUpdatedData={setUpdatedData}
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;