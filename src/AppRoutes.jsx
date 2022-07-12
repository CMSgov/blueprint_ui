import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Controls from "./pages/Controls";
import Control from "./pages/Control";
import ProjectSettings from "./pages/ProjectSettings";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import Home from "./pages/Home";
import ComponentLibrary from "./pages/ComponentLibrary";
import Healthcheck from "./pages/Healthcheck";
import ProjectSystemComponents from "./pages/ProjectSystemComponents";
import ProjectSetup from "./pages/ProjectSetup";
import ProjectSetupConfirmation from "./pages/ProjectSetupConfirmation";
import ProjectSystemSecurityPlan from "./pages/ProjectSystemSecurityPlan";

export const MAIN_ROUTES = {
  HOME: "/",
  HEALTHCHECK: "/healthcheck",
  COMPONENT_LIBRARY: "/component-library",
  HELP: "/help",
  PROJECTS: "/projects",
  PROJECT_SETUP: "/project-setup",
};

export const AppRoutes = () => (
  <Routes>
    <Route path={MAIN_ROUTES.HOME} element={<App />}>
      <Route index element={<Home />} />
      <Route path={MAIN_ROUTES.HEALTHCHECK} element={<Healthcheck />} />
      <Route path={MAIN_ROUTES.HELP}>
        <Route index element={<Help />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path={MAIN_ROUTES.PROJECTS}>
        <Route index element={<Projects />} />
        <Route path=":id">
          <Route index element={<Project />} />
          <Route path="settings" element={<ProjectSettings />} />
          <Route
            path="system-components"
            element={<ProjectSystemComponents />}
          />
          <Route path="controls">
            <Route index element={<Controls />} />
            <Route path=":controlId" element={<Control />} />
          </Route>
          <Route
            path="system-security-plan"
            element={<ProjectSystemSecurityPlan />}
          />
        </Route>
      </Route>
      <Route
        path={MAIN_ROUTES.COMPONENT_LIBRARY}
        element={<ComponentLibrary />}
      >
        <Route index element={<ComponentLibrary />} />
        <Route path="/component-library?page" />
      </Route>
      <Route path={MAIN_ROUTES.PROJECT_SETUP}>
        <Route index element={<ProjectSetup />} />
        <Route path="confirmation" element={<ProjectSetupConfirmation />} />
      </Route>
    </Route>
  </Routes>
);
