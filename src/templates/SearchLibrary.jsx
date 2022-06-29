import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Search, Table, Checkbox } from "@trussworks/react-uswds";

import Pagination from "../molecules/Pagination";
import { Link } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";

const TableRow = ({ component }) => {
  if (component.title === undefined) {
    return "";
  }
  return (
    <>
      <td>{component.title}</td>
      <td>{component.description}</td>
      <td>{component.controls_count}</td>
    </>
  );
};

const EmptyResults = ({ length }) => {
  if (length !== 0) {
    return "";
  }
  return (
    <p>
      There are no components in your project yet. Add one by visiting the{" "}
      <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>Component Library</Link>.
    </p>
  );
};

const SearchLibrary = ({ componentList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const componentNameSearch = () => {
    // @TODO: connect to component search api should return 20 components based on all selected filters, # of total components
  };
  let totalCount = 0;
  let lastItem = componentList[componentList.length - 1];
  if (lastItem !== undefined && lastItem.total_item_count !== undefined) {
    totalCount = lastItem.total_item_count;
  }

  const baseUrl = useLocation();
  let searchParams = baseUrl.search.replaceAll("?", " ").trim();
  searchParams = searchParams.split("=");
  if (searchParams[0] === "page" && Number(searchParams[1]) !== currentPage) {
    setCurrentPage(Number(searchParams[1]));
  }
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const checkBoxHandler = ({ box, v }) => {
    console.log(box, v);
    // @TODO: this should be populating the query params in the url
  };

  return (
    <>
      <div className="grid-row">
        <div className="grid-col-5"></div>
        <div className="grid-col-7">
          <Search onSubmit={componentNameSearch} />
        </div>
      </div>
      <div className="grid-row">
        <div className="component-library-filter grid-col-2">
          <fieldset className="usa-fieldset">
            <legend className="usa-legend">Type</legend>
            <Checkbox
              id="policy-filter"
              name="policy-filter"
              label="Policy"
              onChange={checkBoxHandler}
            />
            <Checkbox
              id="service-filter"
              name="service-filter"
              label="Service"
              onChange={(e) => checkBoxHandler(e.target, "service")}
            />
            <Checkbox
              id="software-filter"
              name="software-filter"
              label="Software"
              onChange={checkBoxHandler}
            />
          </fieldset>
          <fieldset className="usa-fieldset catalog-filter">
            <legend className="usa-legend">Catalog</legend>
            <Checkbox id="ars-3-filter" name="ars-3-filter" label="ARS 3.1" />
            <Checkbox id="ars-5-filter" name="ars-5-filter" label="ARS 5.0" />
          </fieldset>
        </div>
        <div className="grid-col-1"></div>
        <div className="grid-col-9">
          <Table striped bordered>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Description</th>
                <th scope="col">Controls</th>
              </tr>
            </thead>
            <tbody>
              {componentList.map((component, i) => (
                <tr key={i}>
                  <TableRow component={component} />
                </tr>
              ))}
            </tbody>
          </Table>
          <EmptyResults lenth={totalCount} />
          <Pagination
            onPageChange={onPageChange}
            totalCount={totalCount}
            currentPage={currentPage}
            baseUrl={baseUrl.pathname}
          />
        </div>
      </div>
    </>
  );
};

export default SearchLibrary;
