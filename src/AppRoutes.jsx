import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProjectSettings from "./ProjectSettings";

const ROUTES = {
  HOME: "/",
  PROJECT_SETTINGS: "/settings"
}

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.PROJECT_SETTINGS} element={<ProjectSettings />} />
  </Routes>
);
