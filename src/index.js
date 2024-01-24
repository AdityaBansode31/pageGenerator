/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";



// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUp from "views/index-sections/SignUp";

import Main from "admin/Main";
import Dashboard from "admin/content/Dashboard";
import UserProfile from "admin/content/UserProfile";
import YoutubeLinks from "admin/content/YoutubeLink";
import SocialLinks from "admin/content/SocialLinks";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />

       {/* Include Main routes under /admin path */}
       <Route path="/admin/*" element={<Main />} />
       <Route path="/admin/profile" element={<ProfilePage />} />
       <Route path="/admin/dashboard" element={<Dashboard />} />
       <Route path="/admin/sociallink" element={<SocialLinks />} />

       <Route path="/admin/userprofile" element={<UserProfile />} />

       <Route path="/admin/youtubelink" element={<YoutubeLinks />} />



      <Route path="*" element={<Navigate to="/index" replace />} />
      
    </Routes>
  </BrowserRouter>
);
