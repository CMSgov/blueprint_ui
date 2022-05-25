import React from "react";
import { Route, Routes } from "react-router-dom";

import Projects from "./pages/Projects";
import ProjectSettings from "./pages/ProjectSettings";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import Home from "./pages/Home";

const ROUTES = {
  HOME: "/",
  PROJECT_SETTINGS: "/settings",
  PROJECTS: "/projects",
  PROJECTSID: "/projects/:id",
  FAQ: "/faq",
  CONTACT_US:"/contactus",
  HELP:"/help"
}

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.PROJECT_SETTINGS} element={<ProjectSettings />} />
    <Route exact path={ROUTES.PROJECTS} element={<Projects />} />
    <Route path={ROUTES.PROJECTSID} element={<Projects />} />
    <Route path={ROUTES.FAQ} element={<Faq />} />
    <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
    <Route path={ROUTES.HELP} element={<Help />} />
  </Routes>
);
