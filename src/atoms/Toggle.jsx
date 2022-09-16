import React from "react";

const Toggle = () => {
  return (
    <>
      <input className="toggle-checkbox" id={`toggle-new`} type="checkbox" />
      <label className="toggle-label" htmlFor={`toggle-new`}>
        <span className={`toggle-button`} />
      </label>
    </>
  );
};

export default Toggle;
