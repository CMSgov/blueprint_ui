import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectSettings from "./pages/ProjectSettings";

const ROUTES = {
  HOME: "/",
  PROJECT_SETTINGS: "/settings",
  PROJECTS: "/projects",
  PROJECTSID: "/projects/:id"
}

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.PROJECT_SETTINGS} element={<ProjectSettings />} />
    <Route exact path={ROUTES.PROJECTS} element={<Projects />} />
    <Route path={ROUTES.PROJECTSID} element={<Projects />} />
  </Routes>
);
