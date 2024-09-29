import React from "react";
import './Sidebar.css';

export default function Sidebar() {
    return (
        <>
            <ul className="option df">
                <li className="op df-ai">
                    <a href="#home" className="op_link">
                        Home
                    </a>
                </li>
                <li className="op df-ai">
                    <a href="#attendence" className="op_link">
                        Attendence
                    </a>
                </li>
                <li className="op df-ai">
                    <a href="#assignment" className="op_link">
                        Assignment
                    </a>
                </li>
                <li className="op df-ai">
                    <a href="#announcement" className="op_link">
                        Announcement
                    </a>
                </li>
                <li className="op df-ai">
                    <a href="#student" className="op_link">
                        Student
                    </a>
                </li>
            </ul>
        </>
    );
}