import React from "react";

function UserForm({ btnText, onSubmit }) {
  const initialState = { email: "", hashedPassword: "" };
  const [state, setState] = React.useState(initialState);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}
    >
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <label>Password</label>
      <input
        type="text"
        name="todo"
        value={state.hashedPassword}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <button type="submit">{btnText}</button>
    </form>
  );
}

export default UserForm;
