import React from "react";
import './MainContent.css';
import Home from "./Home";
import Attendence from "./Attendence";
import Assignment from "./Assignment";
import Announcement from "./Announcement";
import StudentPage from "./StudentPage";

export default function MainContent() {
    return (
        <>
            <div className="main">
                <Home/>
                <Attendence/>
                <Assignment/>
                <Announcement/>
                <StudentPage/>
            </div>
        </>
    );
}