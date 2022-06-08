import {
  BreadcrumbBar,
  Breadcrumb,
  BreadcrumbLink,
} from "@trussworks/react-uswds";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import GlobalState from "../GlobalState";

const ParentBreadcrumbs = ({ parent }) => {
  return <BreadcrumbLink href={parent.url}>{parent.title}</BreadcrumbLink>;
};

const Breadcrumbs = () => {
  const params = useLocation();
  const homePageName = "Home";
  const pathname = params.pathname.replaceAll("/", " ").trim();
  const topLevelList = [
    "help",
    "projects",
    "project-setup",
    "component-library",
  ];
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

  if (pathname === "contact-us" || pathname === "faq") {
    parentList = [{ title: "help", url: "/help" }];
    pageName = pathname.replaceAll("-", " ");
  } else if (pathArray[0] === "component-library") {
    parentList = [{ title: "component library", url: "/component-library" }];
    //@TODO: when we have a component module convert pathArray[1] to component.title
    // should be similar to the project section pulling from the global state
    pageName = pathArray[1];
  } else if (pathArray[0] === "project-setup") {
    parentList = [{ title: "project setup", url: "/project-setup" }];
    if (pathArray.length === 3) {
      parentList.push({
        title: "Confirmation",
        url: "/project-setup/confirmation",
      });
    }
    pageName = pathArray[pathArray.length - 1];
  } else if (pathArray[0] === "projects") {
    parentList = [{ title: "projects", url: "/projects" }];
    let title = "";
    if (state.project !== undefined && state.project.title !== undefined) {
      title = state.project.title;
    }

    if (pathArray.length === 2) {
      pageName = title;
    } else if (pathArray.length === 3) {
      //potential pages they are on "Add Team Member", "Project Team", "Project Settings", "System Security Plan", "Manage Components", "System Controls"
      parentList.push({ title: title, url: `/projects/${pathArray[1]}` });
      pageName = pathArray[pathArray.length - 1];
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
