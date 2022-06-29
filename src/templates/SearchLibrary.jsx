import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Search, Table, Checkbox } from "@trussworks/react-uswds";
import { ComponentListStub } from "../stub";
import Pagination from "../molecules/Pagination";
import { Link } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";

const TableRow = ({ component }) => {
  return (
    <>
      <td>{component.name}</td>
      <td>{component.description}</td>
      <td>{component.controlCount}</td>
    </>
  );
};

const EmptyResults = ({ lenth }) => {
  if (lenth !== 0) {
    return "";
  }
  return (
    <p>
      There are no components in your project yet. Add one by visiting the{" "}
      <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>Component Library</Link>.
    </p>
  );
};

const SearchLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const componentList = ComponentListStub; // @TODO: connect this to the api instead of a stub
  const componentNameSearch = () => {
    // @TODO: connect to component search api should return 20 components based on all selected filters, # of total components
  };
  const totalCount = componentList.length;
  const baseUrl = useLocation();
  let searchParams = baseUrl.search.replaceAll("?", " ").trim();
  searchParams = searchParams.split("=");
  if (searchParams[0] === "page" && Number(searchParams[1]) !== currentPage) {
    setCurrentPage(Number(searchParams[1]));
  }
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            <Checkbox id="policy-filter" name="policy-filter" label="Policy" />
            <Checkbox
              id="service-filter"
              name="service-filter"
              label="Service"
            />
            <Checkbox
              id="software-filter"
              name="software-filter"
              label="Software"
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
          <EmptyResults lenth={componentList.length} />
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
