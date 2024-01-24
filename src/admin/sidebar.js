// // Sidebar.js

// import React from 'react';
// import { Nav} from 'reactstrap';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <Nav vertical style={{ backgroundColor: '#007BFF', padding: '20px', position: 'fixed', width: '250px', height: '100%' }}>
//        <Link to="/admin/dashboard" style={navLinkStyle}>
//         Dashboard
//       </Link>
//       <Link to="/admin/userprofile" style={navLinkStyle}>
//         User Profile
//       </Link>
//       <Link to="/admin/sociallinks" style={navLinkStyle}>
//         Social Links
//       </Link>
//       <Link to="/admin/ytlink" style={navLinkStyle}>
//         Youtube Links
//       </Link>
//     </Nav>
//   );
// };

// const navLinkStyle = {
//   color: '#fff',
//   textDecoration: 'none',
//   marginBottom: '10px',
//   padding: '10px',
//   borderRadius: '5px',
//   transition: 'background-color 0.3s',
// };

// export default Sidebar;

/*eslint-disable*/
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";

var ps;

const sidebarStyle = {
  backgroundColor: "#007BFF",
  padding: "20px",
  position: "fixed",
  width: "250px",
  height: "100%",
};

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginBottom: "10px",
  padding: "10px",
  borderRadius: "5px",
  transition: "background-color 0.3s",
  display: "flex",
  alignItems: "center",
};

const iconStyle = {
  marginRight: "10px",
};

function Sidebar() {
  const sidebar = React.useRef();
  const location = useLocation();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  return (
    <Nav vertical style={sidebarStyle}>
      <div className="logo" style={{display: "flex",
  alignItems: "center",
  marginBottom: "40px"}}>
        <a
          href="https://www.creative-tim.com?ref=nudr-sidebar"
          className="simple-text logo-mini"
          target="_blank"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" style={{ height: "35px" }} />
          </div>
        </a>
        <a
          href="https://www.creative-tim.com?ref=nudr-sidebar"
          className="simple-text logo-normal"
          target="_blank"
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          Pagegenerator
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          <li style={navLinkStyle} className={activeRoute("/admin/dashboard")}>
            <NavLink to="/admin/dashboard" className="nav-link" style={navLinkStyle}>
              <i className="now-ui-icons design_app" style={iconStyle} />
              <p style={{ margin: 0 }}>Dashboard</p>
            </NavLink>
          </li>
          <li style={navLinkStyle} className={activeRoute("/admin/userprofile")}>
            <NavLink to="/admin/userprofile" className="nav-link" style={navLinkStyle}>
              <i className="now-ui-icons users_single-02" style={iconStyle} />
              <p style={{ margin: 0 }}>User Profile</p>
            </NavLink>
          </li>
          <li style={navLinkStyle} className={activeRoute("/admin/youtubelink")}>
            <NavLink to="/admin/youtubelink" className="nav-link" style={navLinkStyle}>
              <i className="now-ui-icons media-1_button-play" style={iconStyle} />
              <p style={{ margin: 0 }}>YouTube Link</p>
            </NavLink>
          </li>
          <li style={navLinkStyle} className={activeRoute("/admin/sociallink")}>
            <NavLink to="/admin/sociallink" className="nav-link" style={navLinkStyle}>
              <i className="now-ui-icons ui-2_chat-round" style={iconStyle} />
              <p style={{ margin: 0 }}>Social Link</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </Nav>
  );
}

export default Sidebar;

