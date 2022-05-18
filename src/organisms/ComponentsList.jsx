import Component from "../molecules/Component"
const ComponentsList = ({componentList}) => {
    return (
        <div>
            {componentList.map((component) => (
                <Component component={component}/>
            ))}
            <button className="usa-button">Manage System Components</button>
        </div>
    );
}
export default ComponentsList;
