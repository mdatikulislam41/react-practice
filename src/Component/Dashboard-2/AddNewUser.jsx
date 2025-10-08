import React, { useState } from "react";

const AddNewUser = ({ addUser }) => {
  const [value, setValue] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    const gid = new Date().getTime().toString();
    let name = { id: gid, userName: value };
    addUser((prev) => {
      return [...prev, name];
    });
    setValue("");
  };
  const gettingValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <input
          type="text"
          name=""
          id=""
          onChange={gettingValue}
          value={value}
          required
        />
        <button type="submit">Add New User</button>
      </form>
    </div>
  );
};

export default AddNewUser;
