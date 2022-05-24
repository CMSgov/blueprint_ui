import Component from "../molecules/Component";
const ComponentsList = ({ componentList }) => {
  return (
    <>
      {componentList.map((component, i) => (
        <div key={i}>
          <Component component={component} />
        </div>
      ))}
      <button className="usa-button">Manage System Components</button>
    </>
  );
};
export default ComponentsList;
