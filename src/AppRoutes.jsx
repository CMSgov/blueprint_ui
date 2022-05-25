import React from "react";
import { Route, Routes } from "react-router-dom";

import Projects from "./pages/Projects";
import Project from "./pages/Project";
import ProjectSettings from "./pages/ProjectSettings";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import Home from "./pages/Home";

export const MAIN_ROUTES = {
  PROJECTS: "/projects",
  FAQ: "/faq",
  CONTACT_US: "/contactus",
  HELP: "/help",
};

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path={MAIN_ROUTES.PROJECTS}>
      <Route index element={<Projects />} />
      <Route path=":id">
        <Route index element={<Project />} />
        <Route path="settings" element={<ProjectSettings />} />
      </Route>
    </Route>
    <Route path={MAIN_ROUTES.FAQ} element={<Faq />} />
    <Route path={MAIN_ROUTES.CONTACT_US} element={<ContactUs />} />
    <Route path={MAIN_ROUTES.HELP} element={<Help />} />
  </Routes>
);
