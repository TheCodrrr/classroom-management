import React from "react";
import './Attendence.css'

export default function Attendence() {
    return (
        <>
            <div className="attendence_container page dff" id="attendence">
                <div className="attendence_head_container df-ai">
                    <h1 className="attendence_head">Attendence</h1>
                </div>
                <div className="attendence_navbar_container df-ai">
                    <div className="attendence_navbar_added_class_container df-ai">
                        <button className="attendence_nav_elm attendence_elm_selected">Class 4B</button>
                        <button className="attendence_nav_elm">Class 1A</button>
                        <button className="attendence_nav_elm">Class 3C</button>
                        <button className="attendence_nav_elm">Class 2E</button>
                    </div>
                    <button className="attendence_navbar_add_class_container dff">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="attendence_content_container dff">

                </div>
            </div>
        </>
    );
}