import React from "react";
import { LineStyle, Timelapse, BarChartOutlined, ComputerTwoTone, Group, GitHub, 
    Notes ,MailTwoTone, MessageTwoTone,Feedback,VerifiedUser,    } from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timelapse className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcon"/>
                            Stats
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Quick Action
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ComputerTwoTone className="sidebarIcon"/>
                            Devices
                        </li>
                        <li className="sidebarListItem">
                            <Group className="sidebarIcon"/>
                            User
                        </li>
                        <li className="sidebarListItem">
                            <GitHub className="sidebarIcon"/>
                            Repository
                        </li>
                        <li className="sidebarListItem">
                            <Notes className="sidebarIcon"/>
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
                            <MailTwoTone className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon"/>
                            Feed Back
                        </li>
                        <li className="sidebarListItem">
                            <MessageTwoTone className="sidebarIcon"/>
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
                            <VerifiedUser className="sidebarIcon"/>
                            Security Team
                        </li>
                        <li className="sidebarListItem">
                            <Timelapse className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcon"/>
                            Stats
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
