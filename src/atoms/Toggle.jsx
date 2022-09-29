import React from "react";

const Toggle = ({ isOn, onChange }) => {
  return (
    <>
      <input
        className="toggle-checkbox"
        id={`toggle-switch`}
        type="checkbox"
        checked={isOn}
        onChange={onChange}
        data-testid={"on-off-toggle"}
      />
      <label className="toggle-label" htmlFor={`toggle-switch`}>
        <span className={`toggle-button`} />
      </label>
    </>
  );
};

export default Toggle;
