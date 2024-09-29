import React from "react";
import './Content.css';
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Content() {
    return (
        <>
            <div class="content">
                <Sidebar/>
                <MainContent/>
            </div>
        </>
    );
}