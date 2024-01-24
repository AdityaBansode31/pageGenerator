import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './sidebar'; // Adjust the import path
import Dashboard from "./content/Dashboard";
import UserProfile from "./content/UserProfile";
import SocialLinks from "./content/SocialLinks";
import YoutubeLink from "./content/YoutubeLink";
import Nvbar from "./content/Nvbar";
import RegularTables from "./content/Tables";
import EditSocialLink from "./content/EditSocialLink";
import AddSocialLink from "./content/AddSocialLink";
import AddYoutubeLink from "./content/AddYoutubeLink";
import EditYoutubeLink from "./content/EditYoutubeLinks";


const mainContentStyle = {
  padding: '20px',
  marginLeft: '250px',
};

const Main = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md="3">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md="9" style={mainContentStyle}>
          {/* React Router Switch for handling different routes */}
          {/* <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/userprofile" element={<UserProfile />} />
          <Route path="/admin/sociallinks" element={<SocialLinks />} />
          <Route path="/admin/ytlinks" element={<YoutubeLink />} />

          
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes> */}

        {/* <Dashboard /> */}
        <Nvbar />
        {/* <UserProfile /> */}
        {/* <RegularTables /> */}
        <SocialLinks />
        <EditSocialLink />
        <AddSocialLink />
        {/* <YoutubeLink />
        <AddYoutubeLink />
        <EditYoutubeLink /> */}

        </Col>
      </Row>
    </Container>
  );
};

export default Main;
