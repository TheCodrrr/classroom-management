import React from "react";
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="home page df-jc" id="home">
                <h1 className="welcome df-ai">Welcome Name!</h1>
                <div className="boxes df-ai">
                    <a href="#attendence" className="box box1 dff">
                        <h2>Today's Attendence</h2>
                        <p>25/30 present</p>
                    </a>
                    <a href="#assignment" className="box box2 dff">
                        <h2>Assignment</h2>
                        <p>9 students due for submission</p>
                    </a>
                </div>
                <a href="#announcement" className="announcement_container_home df-jc">
                    <div className="annoucement_top df-ai">
                        <h1 className="announce_top_head">Latest Annoucements:</h1>
                        <span className="announcement_add dff">
                            <i className="fa-solid fa-plus announcement_add_icon"></i>
                        </span>
                    </div>
                    <div className="announcement_detail_container df-ai">
                        <h2 className="announcement_head">Mathematics Class Shifted</h2>
                        <p className="announcement_data">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, ipsum aut corporis nisi animi eum laudantium ratione hic quod saepe.
                        </p>
                    </div>
                </a>
            </div>
        </>
    );
}