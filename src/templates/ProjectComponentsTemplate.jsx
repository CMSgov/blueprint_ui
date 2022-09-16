import SearchLibrary from "./SearchLibrary";
import ProjectHeader from "../molecules/ProjectHeader";
import { Link } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";
import { DEFAULT_CATALOG_VERSION } from "../constants";

const ProjectComponentsTemplate = ({
  project,
  componentList,
  totalItemCount,
  typeList,
}) => {
  const { id, acronym, title } = project;
  const subtitle = "System Components";

  return (
    <>
      <ProjectHeader
        id={id}
        acronym={acronym}
        subtitle={subtitle}
        title={title}
      />
      <p>
        These are the components in your system. Components includes pre-written
        control narratives. Add, remove, or create new components to match your
        system architecture, policies, and procedures.
      </p>
      <p>
        You can add components by visiting the{" "}
        <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>Component Library</Link>.
      </p>
      <SearchLibrary
        catalogList={[DEFAULT_CATALOG_VERSION]}
        componentList={componentList}
        linkToComponentLibrary={true}
        totalItemCount={totalItemCount}
        typeList={typeList}
      />
    </>
  );
};

export default ProjectComponentsTemplate;
