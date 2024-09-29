import React from "react";
import './MainContent.css';

export default function MainContent() {
    return (
        <>
            <div class="main">
                <div className="home page" id="home">
                    <h1 class="welcome">Welcome Name!</h1>
                    <div class="boxes df-ai">
                        <a href="#" class="box box1 dff">
                            <h2>Today's Attendence</h2>
                            <p>25/30 present</p>
                        </a>
                        <a href="#" class="box box2 dff">
                            <h2>Assignment</h2>
                            <p>9 students due</p>
                        </a>
                    </div>
                    <div class="annoucements">
                        <div class="annoucement">Latest Annoucements:</div>
                    </div>
                </div>
            </div>
        </>
    );
}