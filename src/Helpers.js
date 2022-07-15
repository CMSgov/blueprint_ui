export const getControlData = (component = {}, controlId) => {
  const getControlResponsiblity = () => {
    let r = controls[controlId].responsibility;
    return r === "Hybrid" ? "some" : r === "Inherited" ? "none" : "some";
  };

  const getControlText = () => {
    if (Object.prototype.hasOwnProperty.call(controls, controlId)) {
      return controls[controlId].narrative;
    }
  };

  const getCatalogControlData = (field) => {
    if (component.hasOwnProperty("catalog_data")) {
      if (component.catalog_data.hasOwnProperty("controls")) {
        if (component.catalog_data.controls.hasOwnProperty(controlId)) {
          return component.catalog_data.controls[controlId][field];
        }
      }
    }
  };

  let controls = JSON.parse(JSON.stringify(component.component_data.controls));
  let controlData = {
    controlId: getCatalogControlData("label"),
    controlTitle: getCatalogControlData("title"),
    controlFamily: getCatalogControlData("family"),
    version: component.catalog_data.version,
    description: getCatalogControlData("description"),
    guidance: getCatalogControlData("guidance"),
    implementationStandards: getCatalogControlData("implementation"),
    narrative: controlId ? getControlText() : "",
    responsibility: getControlResponsiblity(),
  };

  return controlData;
};
