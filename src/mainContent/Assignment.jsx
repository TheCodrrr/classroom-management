import React from "react";
import './Assignment.css';
import AssignmentCard from "./AssignmentCard";

export default function Assignment() {
    return (
        <>
            <div className="assignment_container page dff" id="assignment">
                <div className="assignment_head_container df-ai">
                    <h1 className="assignment_head">Assignment</h1>
                </div>
                <div className="assignment_navbar_container df-ai">
                    <div className="assignment_navbar_added_class_container df-ai">
                        <button className="assignment_nav_elm attendence_elm_selected">Class 4B</button>
                        <button className="assignment_nav_elm">Class 1A</button>
                        <button className="assignment_nav_elm">Class 3C</button>
                        <button className="assignment_nav_elm">Class 2E</button>
                    </div>
                    <button className="assignment_navbar_add_class_container dff">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="assignment_content_container dff">
                    <div className="assignment_card_container dff">
                        <div className="assignment_card_head_row dff">
                            <div className="assign_sno dff">
                                Serial Number
                            </div>
                            <div className="assign_name dff">
                                Assignment Description
                            </div>
                            <div className="assign_start_date dff">
                                Start Date
                            </div>
                            <div className="assign_end_date dff">
                                End Date
                            </div>
                            <div className="per dff">
                                Status
                            </div>
                        </div>
                        <AssignmentCard sno = {1} name = {"Maths Assignment"} assign_start_date = {"20-08-2024"} assign_end_date = {"21-09-2024"} status={"Ongoing"} classes = {"odd"}/>
                        <AssignmentCard sno = {2} name = {"Physics Assignment"} assign_start_date = {"16-04-2024"} assign_end_date = {"21-04-2024"} status={"Completed"} classes = {"even"}/>
                        <AssignmentCard sno = {3} name = {"English Assignment"} assign_start_date = {"03-05-2024"} assign_end_date = {"21-05-2024"} status={"Completed"} classes = {"odd"}/>
                        <AssignmentCard sno = {4} name = {"Data Structures Assignment"} assign_start_date = {"20-12-2024"} assign_end_date = {"05-01-2025"} status={"Upcoming"} classes = {"even"}/>
                        <AssignmentCard sno = {5} name = {"OOP Assignment"} assign_start_date = {"22-08-2024"} assign_end_date = {"10-09-2024"} status={"Ongoing"} classes = {"odd"}/>
                    </div>
                </div>
            </div>
        </>
    );
}