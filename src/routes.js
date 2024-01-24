// routes.js
import Dashboard from "admin/content/Dashboard";
import UserProfile from "admin/content/UserProfile";
import SocialLinks from "admin/content/SocialLinks";
import YoutubeLink from "admin/content/YoutubeLink";

const routes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "userprofile", element: <UserProfile /> },
  { path: "sociallinks", element: <SocialLinks /> },
  { path: "youtubelinks", element: <YoutubeLink /> },
];

export default routes;
