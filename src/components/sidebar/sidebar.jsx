import React from "react";
import {
    LineStyle, Timelapse, BarChartOutlined, ComputerTwoTone, Group, GitHub,
    Notes, MailTwoTone, MessageTwoTone, Feedback, VerifiedUser, ExitToApp
} from "@material-ui/icons";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function Sidebar() {
    const { user } = useAuth0();
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timelapse className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcon" />
                            Stats
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Quick Action
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/device" className="link">
                            <li className="sidebarListItem">
                                <ComputerTwoTone className="sidebarIcon" />
                                Devices
                            </li>
                        </Link>
                        <Link to="/user" className="link">
                            <li className="sidebarListItem">
                                <Group className="sidebarIcon" />
                                User
                            </li>
                        </Link>
                        <Link to="/repository" className="link">
                            <li className="sidebarListItem">
                                <GitHub className="sidebarIcon" />
                                Repository
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Notes className="sidebarIcon" />
                            Patch Notes
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailTwoTone className="sidebarIcon" />
                            Mail
                        </li>
                        <Link to="/feedback" className="link">
                            <li className="sidebarListItem">
                                <Feedback className="sidebarIcon" />
                                Feed Back
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <MessageTwoTone className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        User Management
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <VerifiedUser className="sidebarIcon" />
                            Security Team
                        </li>
                        <li className="sidebarListItem">
                            <Timelapse className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcon" />
                            Stats
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebarFooter">
                <div className="sidebarFooterWrapper">
                    Hello, {user.name}
                    <Link to="/logout" className="link">
                        <li className="sidebarListItem">
                            <ExitToApp className="sidebarIcon" />
                            Logout
                        </li>
                    </Link>
                </div>
            </div>
        </div>
    )
}
