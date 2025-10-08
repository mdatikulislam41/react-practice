import React, { useState } from "react";
import { Data } from "./Data";
import Template from "./Template";

const Dashboard = () => {
  const [dataum, setData] = useState(Data);

  return (
    <div>
      <Template info={dataum}></Template>
    </div>
  );
};

export default Dashboard;
