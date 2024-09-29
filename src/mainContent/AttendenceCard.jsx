import React from "react";
import './AttendenceCard.css'

export default function AttendenceCard(props) {
    return (
        <>
            <div className="attendence_card dff">
                <div className={`att_sno dff ${props.classes}`}>{ props.sno }</div>
                <div className={`att_name dff ${props.classes}`}>{ props.name }</div>
                <div className={`att_class dff ${props.classes}`}>{ props.att_class }</div>
                <div className={`total_class dff ${props.classes}`}>{ props.total_class }</div>
                <div className={`per dff ${props.classes}`}>{ (Number)(props.att_class*100)/props.total_class }</div>
            </div>
        </>
    );
}