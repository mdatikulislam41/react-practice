import React from "react";
import Single from "./Single";

const Template = ({ info, removeItem }) => {
  return <Single singleInfo={info} removeItem={removeItem}></Single>;
};

export default Template;
