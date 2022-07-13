import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
} from "@trussworks/react-uswds";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";
import GlobalState from "../GlobalState";

const ParentBreadcrumbs = ({ parent }) => {
  return <BreadcrumbLink href={parent.url}>{parent.title}</BreadcrumbLink>;
};

const Breadcrumbs = () => {
  const params = useLocation();
  const homePageName = "Home";
  const pathname = params.pathname.replaceAll("/", " ").trim();
  let topLevelList = [];
  for (let key in MAIN_ROUTES) {
    topLevelList.push(MAIN_ROUTES[key].replaceAll("/", " ").trim());
  }
  const [state] = useContext(GlobalState);

  if (pathname === "") {
    // Do not show breadcrumbs on the home page
    return "";
  } else if (topLevelList.includes(pathname)) {
    return (
      <BreadcrumbBar>
        <Breadcrumb>
          <BreadcrumbLink href="/">{homePageName}</BreadcrumbLink>
        </Breadcrumb>
        <Breadcrumb current>{pathname.replaceAll("-", " ")}</Breadcrumb>
      </BreadcrumbBar>
    );
  }
  let parentList = [];
  let pathArray = pathname.split(" ");
  let pageName = "";

  function appendToParentList(title, url) {
    parentList.push({
      title: title,
      url: url,
    });
  }
  function setPageName(name) {
    pageName = name.replaceAll("-", " ");
  }
  setPageName(pathArray[pathArray.length - 1]);
  if (pathArray[1] === "contact-us" || pathArray[1] === "faq") {
    appendToParentList("help", "/help");
  } else if (pathArray[0] === "components") {
    appendToParentList("components", "/components");
    let title = "";
    if (state.component !== undefined && state.component.title !== undefined) {
      title = state.component.title;
    }

    if (pathArray.length === 2) {
      setPageName(title);
    }
  } else if (pathArray[0] === "project-setup") {
    appendToParentList("project setup", "/project-setup");
    if (pathArray.length === 3) {
      appendToParentList("Confirmation", "/project-setup/confirmation");
    }
  } else if (pathArray[0] === "projects") {
    appendToParentList("projects", "/projects");
    let title = "";
    if (state.project !== undefined && state.project.title !== undefined) {
      title = state.project.title;
    }

    if (pathArray.length === 2) {
      setPageName(title);
    } else if (pathArray.length === 3) {
      //potential pages they are on "Add Team Member", "Project Team", "Project Settings", "System Security Plan", "Manage Components", "System Controls"
      appendToParentList(title, `/projects/${pathArray[1]}`);
    }
  }

  return (
    <BreadcrumbBar>
      <Breadcrumb>
        <BreadcrumbLink href="/">{homePageName}</BreadcrumbLink>
      </Breadcrumb>
      {parentList.map((parent, i) => (
        <Breadcrumb key={i}>
          <ParentBreadcrumbs parent={parent} />
        </Breadcrumb>
      ))}
      <Breadcrumb current>{pageName}</Breadcrumb>
    </BreadcrumbBar>
  );
};

export default Breadcrumbs;
