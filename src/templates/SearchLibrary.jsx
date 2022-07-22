import { Checkbox, Search } from "@trussworks/react-uswds";
import { useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { Link } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";
import Pagination from "../molecules/Pagination";

const TableRow = ({ component }) => {
  if (component.title === undefined) {
    return "";
  }
  return (
    <>
      <td>
        <Link to={`/components/${component.id}`}>{component.title}</Link>
      </td>
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
const SearchLibrary = ({
  componentList = [],
  linkToComponentLibrary = false,
  typeList = [],
  totalItemCount = 0,
}) => {
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
    window.location.reload();
  };

  // format url for pagination
  let paginationUrl = baseUrl.pathname + "?";
  if (currentSearch) {
    paginationUrl += "search=" + currentSearch + "&";
  }
  if (currentType) {
    paginationUrl += "type=" + currentType + "&";
  }

  let showTypeFilter = typeList && typeList.length > 1;
  let catalogClasses = "usa-fieldset ";
  if (showTypeFilter) {
    catalogClasses += "catalog-filter";
  }

  return (
    <>
      <div className="grid-row">
        <div className="grid-col-5">
          {linkToComponentLibrary && (
            <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>
              <button className="usa-button usa-button--outline add-component-button">
                Add from the Component Library
              </button>
            </Link>
          )}
        </div>
        <div className="grid-col-7">
          <Search
            onSubmit={componentNameSearch}
            placeholder={currentSearch}
            className="width-full"
          />
        </div>
      </div>
      <div className="grid-row">
        <div className="component-library-filter grid-col-2">
          {showTypeFilter && (
            <fieldset className="usa-fieldset">
              <legend className="usa-legend">Type</legend>
              {typeList.map((type, i) => (
                <Checkbox
                  id={type[0] + "-filter"}
                  name={type[0] + "-filter"}
                  label={type[0]}
                  value={"type=" + type[0]}
                  onChange={checkBoxHandler}
                  key={i}
                />
              ))}
            </fieldset>
          )}

          <fieldset className={catalogClasses}>
            <legend className="usa-legend">Catalog</legend>
            <Checkbox
              id="ars-3-filter"
              name="ars-3-filter"
              label="ARS 3.1"
              value="catalog=1"
              onChange={checkBoxHandler}
            />
            <Checkbox
              id="ars-5-filter"
              name="ars-5-filter"
              label="ARS 5.0"
              value="catalog=2"
              onChange={checkBoxHandler}
            />
          </fieldset>
        </div>
        <div className="grid-col-1"></div>
        <div className="grid-col-9">
          <table
            data-testid="table"
            className="usa-table width-full usa-table--striped"
          >
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
          </table>
          <EmptyResults lenth={totalItemCount} />
          <Pagination
            onPageChange={onPageChange}
            totalCount={totalItemCount}
            currentPage={currentPage}
            baseUrl={paginationUrl}
          />
        </div>
      </div>
    </>
  );
};

export default SearchLibrary;
