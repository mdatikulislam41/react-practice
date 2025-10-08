import React, { useState } from "react";
import { Data } from "./Data";
import Template from "./Template";
import AddNewUser from "./AddNewUser";
import Reset from "./Reset";

const Dashboard = () => {
  const [dataum, setData] = useState(Data);

  const removeData = (itemId) => {
    const freshItem = dataum.filter((item, index, array) => {
      return item.id != itemId;
    });
    setData(freshItem);
  };
  const dataReset = () => {
    setData(Data);
  };

  return (
    <div>
      <AddNewUser addUser={setData}></AddNewUser>
      <Template info={dataum} removeItem={removeData}></Template>
      {dataum.length == 0 && <Reset datareset={dataReset}></Reset>}
    </div>
  );
};

export default Dashboard;
