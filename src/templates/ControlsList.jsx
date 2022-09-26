import { Checkbox } from "@trussworks/react-uswds";
import { useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { Link } from "react-router-dom";
import Pagination from "../molecules/Pagination";

const TableRow = ({ control }) => {
  if (control.control.title === undefined) {
    return "";
  }
  return (
    <>
      <td>
        <Link
          to={`/projects/${control.project.id}/controls/${control.control.control_id}`}
        >
          {control.control.control_label}
        </Link>
      </td>
      <td>{control.control.title}</td>
      <td>
        {control.status === "completed"
          ? "Completed"
          : control.status === "incomplete"
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
  return <p>There were no controls found for this project.</p>;
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
            name="status__in"
            label="Completed"
            value="completed"
            onChange={checkBoxHandler}
            key="3"
            checked={isCheckedStatus("completed")}
          />
          <Checkbox
            id="incomplete-filter"
            name="status__in"
            label="Incomplete"
            value="incomplete"
            onChange={checkBoxHandler}
            key="2"
            checked={isCheckedStatus("incomplete")}
          />
          <Checkbox
            id="notstarted-filter"
            name="status__in"
            label="Not Started"
            value="not_started"
            onChange={checkBoxHandler}
            key="1"
            checked={isCheckedStatus("not_started")}
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
  const [currentStatus, setCurrentStatus] = useState("");
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
    searchParams.get("status__in") &&
    !currentStatus.includes(searchParams.get("status__in"))
  ) {
    setCurrentStatus(searchParams.get("status__in"));
  }

  // Call back functions used for updating values from the page
  //callback function to change the current page
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // callback function to gather values from checkboxes and update url query params
  const checkBoxHandler = () => {
    let newQuery = "?page=1";

    let checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    let statuses = "";
    for (var checkbox of checkboxes) {
      statuses += checkbox.value + ",";
    }
    if (statuses.length > 0) {
      newQuery += "&status__in=" + statuses.slice(0, -1);
    }
    navigate({
      pathname: baseUrl.pathname,
      search: `?${createSearchParams(newQuery)}`,
    });
    window.location.reload();
  };

  // format url for pagination
  let paginationUrl = baseUrl.pathname + "?";
  if (currentStatus.length > 0) {
    paginationUrl += currentStatus + "&";
  }

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
