import React from "react";
import './Content.css';
import Sidebar from "./Sidebar";
import MainContent from "./mainContent/MainContent";

export default function Content() {
    return (
        <>
            <div className="content">
                <Sidebar/>
                <MainContent/>
            </div>
        </>
    );
}