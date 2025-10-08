import React from "react";

const Single = (props) => {
  return (
    <>
      {props.singleInfo.map((item) => {
        return (
          <div key={item.id}>
            <h6>id: {item.id}</h6>
            <h6>Name: {item.userName}</h6>
          </div>
        );
      })}
    </>
  );
};

export default Single;
