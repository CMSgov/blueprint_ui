import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Component from "./pages/Component";
import ComponentLibrary from "./pages/ComponentLibrary";
import ContactUs from "./pages/ContactUs";
import Control from "./pages/Control";
import Controls from "./pages/Controls";
import Faq from "./pages/Faq";
import Healthcheck from "./pages/Healthcheck";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import ProjectSettings from "./pages/ProjectSettings";
import ProjectSetup from "./pages/ProjectSetup";
import ProjectSetupConfirmation from "./pages/ProjectSetupConfirmation";
import ProjectSystemSecurityPlan from "./pages/ProjectSystemSecurityPlan";
import ProjectSetupSelectComponents from "./pages/ProjectSetupSelectComponents";
import ProjectComponents from "./pages/ProjectComponents";

export const MAIN_ROUTES = {
  HOME: "/",
  HEALTHCHECK: "/healthcheck",
  COMPONENT_LIBRARY: "/components",
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
          <Route path="components" element={<ProjectComponents />} />
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
      <Route path={MAIN_ROUTES.COMPONENT_LIBRARY}>
        <Route index element={<ComponentLibrary />} />
        <Route path="/components?page" />
        <Route path=":componentId">
          <Route index element={<Component />} />
        </Route>
      </Route>
      <Route path={MAIN_ROUTES.PROJECT_SETUP}>
        <Route index element={<ProjectSetup />} />
        <Route path="confirmation">
          <Route index element={<ProjectSetupConfirmation />} />
          <Route path="select-components">
            <Route index element={<ProjectSetupSelectComponents />} />
          </Route>
        </Route>
      </Route>
    </Route>
  </Routes>
);
