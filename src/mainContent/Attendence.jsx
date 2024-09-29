import React from "react";
import './Attendence.css';
import AttendenceCard from "./AttendenceCard";

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
                    <div className="attendence_card_container dff">
                        <div className="attendence_card_head_row dff">
                            <div className="att_sno dff">
                                Serial Number
                            </div>
                            <div className="att_name dff">
                                Student Name
                            </div>
                            <div className="att_class dff">
                                Attended Classes
                            </div>
                            <div className="total_class dff">
                                Total Classes
                            </div>
                            <div className="per dff">
                                Percentage
                            </div>
                        </div>
                        <AttendenceCard sno = {1} name = {"Rahul"} att_class = {16} total_class = {20} classes={"odd"}/>
                        <AttendenceCard sno = {2} name = {"Rohit"} att_class = {18} total_class = {20} classes={"even"}/>
                        <AttendenceCard sno = {3} name = {"Yash"} att_class = {19} total_class = {20} classes={"odd"}/>
                        <AttendenceCard sno = {4} name = {"Aryan"} att_class = {20} total_class = {20} classes={"even"}/>
                        <AttendenceCard sno = {5} name = {"Jayveer"} att_class = {17} total_class = {20} classes={"odd"}/>
                    </div>
                </div>
            </div>
        </>
    );
}