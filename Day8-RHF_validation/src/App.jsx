import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div className="p-3 bg-blue-200 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem, index) => {
            return (
              <Usercard
                key={index}
                user={elem}
                index={index}
                setToggle={setToggle}
                setEditIndex={setEditIndex}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form
            setUsers={setUsers}
            setToggle={setToggle}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            users={users}
          />
        </div>
      )}
    </div>
  );
};

export default App;