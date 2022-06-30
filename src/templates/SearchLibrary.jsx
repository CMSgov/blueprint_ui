import { useState } from "react";
import {
  useLocation,
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
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
// this seems overly complex when it is not doing much :/ defining variables, setting url params, callbacks, template varibles finished, template
const SearchLibrary = ({ componentList }) => {
  const baseUrl = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [currentType, setCurrentType] = useState();

  //set the url query params into state
  const [searchParams] = useSearchParams();
  if (
    Number(searchParams.get("page")) &&
    currentPage !== Number(searchParams.get("page"))
  ) {
    setCurrentPage(Number(searchParams.get("page")));
  }
  if (
    searchParams.get("search") &&
    currentSearch !== searchParams.get("search")
  ) {
    setCurrentSearch(searchParams.get("search"));
  }

  if (searchParams.get("type") && currentType !== searchParams.get("type")) {
    setCurrentType(searchParams.get("type"));
  }

  // Call back functions used for updating values from the page
  //callback function to change the current page
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //callback function from search component
  const componentNameSearch = ({ query }) => {
    if (query !== currentSearch) {
      setCurrentSearch(query);
    }
  };
  // callback function to gather values from checkboxes to be added to url query params
  const checkBoxHandler = () => {
    let newQuery = "?";
    if (currentPage) {
      newQuery += "page=" + currentPage + "&";
    }
    if (currentSearch) {
      newQuery += "search=" + currentSearch + "&";
    }

    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    for (var checkbox of checkboxes) {
      if (!newQuery.includes(checkbox.value)) {
        newQuery += checkbox.value + "&";
      }
    }
    navigate({
      pathname: baseUrl.pathname,
      search: `?${createSearchParams(newQuery)}`,
    });
  };

  // setup total count for pagination to work
  let totalCount = 0;
  const lastItem = componentList[componentList.length - 1];
  if (lastItem !== undefined && lastItem.total_item_count !== undefined) {
    totalCount = lastItem.total_item_count;
  }
  // format url for pagination
  let paginationUrl = baseUrl.pathname + "?";
  if (currentSearch) {
    paginationUrl += "search=" + currentSearch + "&";
  }
  if (currentType) {
    paginationUrl += "type=" + currentType + "&";
  }
  return (
    <>
      <div className="grid-row">
        <div className="grid-col-5"></div>
        <div className="grid-col-7">
          <Search onSubmit={componentNameSearch} placeholder={currentSearch} />
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
              value="type=policy"
              onChange={checkBoxHandler}
            />
            <Checkbox
              id="service-filter"
              name="service-filter"
              label="Service"
              value="type=service"
              onChange={checkBoxHandler}
            />
            <Checkbox
              id="software-filter"
              name="software-filter"
              label="Software"
              value="type=software"
              onChange={checkBoxHandler}
            />
          </fieldset>
          <fieldset className="usa-fieldset catalog-filter">
            <legend className="usa-legend">Catalog</legend>
            <Checkbox
              id="ars-3-filter"
              name="ars-3-filter"
              label="ARS 3.1"
              value="catalog=1"
            />
            <Checkbox
              id="ars-5-filter"
              name="ars-5-filter"
              label="ARS 5.0"
              value="catalog=2"
            />
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
            baseUrl={paginationUrl}
          />
        </div>
      </div>
    </>
  );
};

export default SearchLibrary;
