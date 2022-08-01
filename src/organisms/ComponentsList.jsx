import { useLocation } from "react-router-dom";
import { ComponentListItem } from "../molecules/ComponentListItem";

const ComponentsList = ({ componentList }) => {
  const params = useLocation();
  const manageComponentsUrl = params.pathname + "/components";
  return (
    <>
      {componentList.map((component, i) => (
        <div key={i}>
          <ComponentListItem component={component} />
        </div>
      ))}
      <a href={manageComponentsUrl}>
        <button className="usa-button">Manage System Components</button>
      </a>
    </>
  );
};
export default ComponentsList;
