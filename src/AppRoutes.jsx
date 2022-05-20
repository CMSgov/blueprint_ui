import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import Help from "./Help";
import Home from "./Home";
import ProjectSettings from "./ProjectSettings";

const ROUTES = {
  HOME: "/",
  PROJECT_SETTINGS: "/settings",
  FAQ: "/faq",
  CONTACT_US:"/contactus",
  HELP:"/help"
}

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.PROJECT_SETTINGS} element={<ProjectSettings />} />
    <Route path={ROUTES.FAQ} element={<Faq />} />
    <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
    <Route path={ROUTES.HELP} element={<Help />} />
  </Routes>
);
