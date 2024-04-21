import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white z-30">
      <BounceLoader color="#121928" />
    </div>
  );
};

export default Loading;