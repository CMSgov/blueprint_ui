import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectSettings from "./pages/ProjectSettings";

const ROUTES = {
  HOME: "/",
  PROJECT_SETTINGS: "/settings",
  PROJECTS: "/projects"
}

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.PROJECT_SETTINGS} element={<ProjectSettings />} />
    <Route path={ROUTES.PROJECTS} element={<Projects />} />
  </Routes>
);
