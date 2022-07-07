import Component from "../molecules/Component";
import { useLocation } from "react-router-dom";
const ComponentsList = ({ componentList }) => {
  const params = useLocation();
  const manageComponentsUrl = params.pathname + "/system-components";
  return (
    <>
      {componentList.map((component, i) => (
        <div key={i}>
          <Component component={component} />
        </div>
      ))}
      <a href={manageComponentsUrl}>
        <button className="usa-button">Manage System Components</button>
      </a>
    </>
  );
};
export default ComponentsList;
