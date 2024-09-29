import React from "react";
import './AssignmentCard.css'

export default function AssignmentCard(props) {
    return (
        <>
            <div className="assignment_card dff">
                <div className={`assign_sno dff ${props.classes}`}>{ props.sno }</div>
                <div className={`assign_name dff ${props.classes}`}>{ props.name }</div>
                <div className={`assign_start_date dff ${props.classes}`}>{ props.assign_start_date }</div>
                <div className={`assign_end_date dff ${props.classes}`}>{ props.assign_end_date }</div>
                <div className={`status dff ${props.classes}`}>{ props.status }</div>
            </div>
        </>
    );
}