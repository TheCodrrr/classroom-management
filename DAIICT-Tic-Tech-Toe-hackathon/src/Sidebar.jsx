import React from "react";
import './Sidebar.css';

export default function Sidebar() {
    return (
        <>
            <ul class="option df">
                <li class="op df-ai">
                    <a href="#home" className="op_link">
                        Home
                    </a>
                </li>
                <li class="op df-ai">
                    <a href="#" className="op_link">
                        Attendence
                    </a>
                </li>
                <li class="op df-ai">
                    <a href="#" className="op_link">
                        Assignment
                    </a>
                </li>
                <li class="op df-ai">
                    <a href="#" className="op_link">
                        Announcement
                    </a>
                </li>
                <li class="op df-ai">
                    <a href="#" className="op_link">
                        Student
                    </a>
                </li>
            </ul>
        </>
    );
}