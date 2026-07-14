import React, { useState } from "react";

const App = () => {
  console.log("🔄 App Component Rendered");

  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "Aman",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>
      <h1>User: {user.name}</h1>

      <hr />

      {/* -------------------------
          React Way
          -------------------------
          Creates a NEW object.
          React gets a new reference,
          so it re-renders immediately.
      */}
      <button
        onClick={() => {
          console.log("✅ setUser() called");

          setUser({
            name: "Sheryians",
          });
        }}
      >
        React Way (setUser)
      </button>

      <br />
      <br />

      {/* -------------------------
          Wrong Way
          -------------------------
          Changes the EXISTING object.
          No new object is created.
          React doesn't know anything changed.
      */}
      <button
        onClick={() => {
          console.log("❌ Direct Mutation");

          user.name = "Mutated Name";

          console.log(user);
        }}
      >
        Mutate Object
      </button>

      <br />
      <br />

      {/* -------------------------
          This changes another state.
          React re-renders because
          count changed.

          During the new render,
          React reads user.name again,
          and now you'll suddenly see
          "Mutated Name".
      */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default App;

/*
The lesson

This example demonstrates the difference perfectly:

->setUser() creates a new object, updates React's state, and triggers a re-render.
->user.name = ... mutates the existing object, but its reference stays the same. Since no new object is passed to setUser(), React has no state update to process and therefore doesn't re-render.
->The mutated value only appears later if some other state change causes a re-render.

This is exactly why React recommends treating state as immutable: always create a new object instead of changing the existing one. Once you understand this, topics like the spread operator (...), React.memo, Redux, and state management libraries become much easier to grasp.
*/