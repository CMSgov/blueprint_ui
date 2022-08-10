import React from "react";
import { Route, Routes } from "react-router-dom";

import Private from "./atoms/Private";
import App from "./App";
import Component from "./pages/Component";
import ComponentLibrary from "./pages/ComponentLibrary";
import ContactUs from "./pages/ContactUs";
import Control from "./pages/Control";
import Controls from "./pages/Controls";
import CreateAccount from "./pages/CreateAccount";
import Faq from "./pages/Faq";
import Healthcheck from "./pages/Healthcheck";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
  LOGIN: "/login",
  CREATE_ACCOUNT: "/create-account",
  PROJECTS: "/projects",
  PROJECT_SETUP: "/project-setup",
};

export const AppRoutes = () => (
  <Routes>
    <Route path={MAIN_ROUTES.HOME} element={<App />}>
      <Route index element={<Private Component={Home} />} />
      <Route path={MAIN_ROUTES.LOGIN} element={<Login />} />
      <Route path={MAIN_ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
      <Route path={MAIN_ROUTES.HEALTHCHECK} element={<Healthcheck />} />
      <Route path={MAIN_ROUTES.HELP}>
        <Route index element={<Private Component={Help} />} />
        <Route path="contact-us" element={<Private Component={ContactUs} />} />
        <Route path="faq" element={<Private Component={Faq} />} />
      </Route>
      <Route path={MAIN_ROUTES.PROJECTS}>
        <Route index element={<Private Component={Projects} />} />
        <Route path=":id">
          <Route index element={<Private Component={Project} />} />
          <Route
            path="settings"
            element={<Private Component={ProjectSettings} />}
          />
          <Route
            path="components"
            element={<Private Component={ProjectComponents} />}
          />
          <Route path="controls">
            <Route index element={<Private Component={Controls} />} />
            <Route
              path=":controlId"
              element={<Private Component={Control} />}
            />
          </Route>
          <Route
            path="system-security-plan"
            element={<Private Component={ProjectSystemSecurityPlan} />}
          />
        </Route>
      </Route>
      <Route path={MAIN_ROUTES.COMPONENT_LIBRARY}>
        <Route index element={<Private Component={ComponentLibrary} />} />
        <Route path="/components?page" />
        <Route path=":componentId">
          <Route index element={<Private Component={Component} />} />
        </Route>
      </Route>
      <Route path={MAIN_ROUTES.PROJECT_SETUP}>
        <Route index element={<Private Component={ProjectSetup} />} />
        <Route path="confirmation">
          <Route
            index
            element={<Private Component={ProjectSetupConfirmation} />}
          />
          <Route path="select-components">
            <Route
              index
              element={<Private Component={ProjectSetupSelectComponents} />}
            />
          </Route>
        </Route>
      </Route>
    </Route>
  </Routes>
);
