import React, { useState } from "react";

const Single = ({ singleInfo, removeItem }) => {
  const removeItemm = (itemId) => {
    removeItem(itemId);
  };
  return (
    <>
      {singleInfo.map((item) => {
        return (
          <div key={item.id}>
            <h6>id: {item.id}</h6>
            <h6>Name: {item.userName}</h6>
            <button onClick={() => removeItemm(item.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Single;
