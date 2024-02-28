import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const errors = useRouteError();
  console.log("errors", errors);
  return (
    <div className="bg-cyan-50 h-[100vh] font-bold text-lg pl-10 pt-10">
      <h1 className="text-2xl ">Ooops!</h1>
      <p className="text-red-500">something went wrong</p>
      <p>{errors.data}</p>
      <p>{errors.error.message}</p>
      <p>{errors.error.stack}</p>
    </div>
  );
};

export default Error;
