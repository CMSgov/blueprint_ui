import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App"
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import ProjectSettings from "./pages/ProjectSettings";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import Home from "./pages/Home";

export const MAIN_ROUTES = {
  HOME: "/",
  COMPONENT_LIBRARY: "/component-library",
  CONTACT_US: "/contact-us",
  FAQ: "/faq",
  HELP: "/help",
  PROJECTS: "/projects",
};

export const AppRoutes = () => (
  <Routes>
    <Route path={MAIN_ROUTES.HOME} element={<App />}>
      <Route index element={<Home />} />
      <Route path={MAIN_ROUTES.CONTACT_US} element={<ContactUs />} />
      <Route path={MAIN_ROUTES.FAQ} element={<Faq />} />
      <Route path={MAIN_ROUTES.HELP} element={<Help />} />
      <Route path={MAIN_ROUTES.PROJECTS}>
        <Route index element={<Projects />} />
        <Route path=":id">
          <Route index element={<Project />} />
          <Route path="settings" element={<ProjectSettings />} />
        </Route>
      </Route>
    </Route>
  </Routes>
);
