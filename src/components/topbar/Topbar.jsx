import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";


export default function Topbar() {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    console.log(user);
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <img className="topbarLogo"
              src="data:image/jpeg;base64,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"
              alt="Company Logo" />
            <span className="topbarHeading">Admin Management Dashboard</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">9</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">8</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src={user.picture} alt={user.name} className="topAvatar"/>
          </div>
        </div>
      </div>
    );
  }
  else{
    console.log("not logged in");

  }
}