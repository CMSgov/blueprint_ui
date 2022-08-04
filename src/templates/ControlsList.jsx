import { Checkbox } from "@trussworks/react-uswds";
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

const TableRow = ({ control }) => {
  if (control.title === undefined) {
    return "";
  }
  return (
    <>
      <td>
        <Link
          to={`/projects/${control.project}/controls/${control.control_id}`}
        >
          {control.control_label}
        </Link>
      </td>
      <td>{control.title}</td>
      <td>
        {control.status === 3
          ? "Complete"
          : control.status === 2
          ? "Incomplete"
          : "Not started"}
      </td>
    </>
  );
};

const EmptyResults = ({ length }) => {
  if (length !== 0) {
    return "";
  }
  return (
    <p>
      There are no controls in your project yet. Add one by visiting the{" "}
      <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>Component Library</Link>.
    </p>
  );
};

const FilterCol = ({ currentStatus, checkBoxHandler }) => {
  const isCheckedStatus = (value) => {
    if (currentStatus.includes(value)) {
      return true;
    }
    return false;
  };
  return (
    <>
      <div className="component-library-filter grid-col-2">
        <fieldset className="usa-fieldset">
          <legend className="usa-legend">Status</legend>
          <Checkbox
            id="completed-filter"
            name="completed-filter"
            label="Completed"
            value="3"
            onChange={checkBoxHandler}
            key="3"
            checked={isCheckedStatus("completed")}
          />
          <Checkbox
            id="incomplete-filter"
            name="incomplete-filter"
            label="Incomplete"
            value="2"
            onChange={checkBoxHandler}
            key="2"
            checked={isCheckedStatus("incomplete")}
          />
          <Checkbox
            id="notstarted-filter"
            name="notstarted-filter"
            label="Not Started"
            value="1"
            onChange={checkBoxHandler}
            key="1"
            checked={isCheckedStatus("notstarted")}
          />
        </fieldset>
      </div>
      <div className="grid-col-1"></div>
    </>
  );
};
// this seems overly complex when it is not doing much :/ defining variables, setting url params, callbacks, template varibles finished, template
const ProjectControls = ({ controlsList = [], totalItemCount = 0 }) => {
  const baseUrl = useLocation();
  let navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //set the url query params into state
  const [searchParams] = useSearchParams();
  if (
    Number(searchParams.get("page")) &&
    currentPage !== Number(searchParams.get("page"))
  ) {
    setCurrentPage(Number(searchParams.get("page")));
  }

  if (
    searchParams.get("status") &&
    !currentStatus.includes(searchParams.get("status"))
  ) {
    setCurrentStatus(searchParams.getAll("status"));
  }

  // Functions to generate query strings
  const getFiltersQuery = () => {
    let url = "";
    if (currentStatus) {
      currentStatus.forEach((element) => {
        url += "status=" + element + "&";
      });
    }
    return url;
  };
  const getPageQuery = () => {
    let url = "";
    if (currentPage) {
      url += "page=" + currentPage + "&";
    }
    return url;
  };

  // Call back functions used for updating values from the page
  //callback function to change the current page
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // callback function to gather values from checkboxes and update url query params
  const checkBoxHandler = () => {
    let newQuery = "?";
    newQuery += getPageQuery();

    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    for (var checkbox of checkboxes) {
      console.log(checkbox.value);
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
  paginationUrl += getFiltersQuery();

  // How to display filters
  let tableGridCol = "grid-col-9";
  let showFilterCol = true;

  return (
    <>
      <div className="grid-row">
        {showFilterCol && (
          <FilterCol
            currentStatus={currentStatus}
            checkBoxHandler={checkBoxHandler}
          />
        )}
        <div className={tableGridCol}>
          <table
            data-testid="table"
            className="usa-table width-full usa-table--striped"
          >
            <thead>
              <tr>
                <th scope="col">Control</th>
                <th scope="col">Control Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {controlsList.map((control, i) => (
                <tr key={i}>
                  <TableRow control={control} />
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

export default ProjectControls;
