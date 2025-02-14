import React from "react";
import Link from "next/link";
import portfolio from "./portfolio.module.css";
import style from "../page.module.css";
import ActionAreaCard from "@/components/projectCard"


export default function Portfolio() {
  return (
    <div className={style.page}>
      <div className={style.main}>
      <h1 >Portfolio</h1>
        <ActionAreaCard
        link="https://www.polyplanner.pro"
        image="/PPPicon.png"
        alt="Poly Planner Pro logo"
        heading="Poly Planner Pro"
        text="Ongoing Software Engineering capstone with Cal Poly's Engineering Student Services. Poly Planner Pro is a visual flowchart build that helps students plan their classes and verify degree requirements for the transition to the semester system."
      />
        <div className="project-details">
          <p className="project-name">My old webpage</p>
          <p className="project-description">
            My old portfolio website with images of my older projects
          </p>
          <div className="project-details">
          </div>
        </div>
      </div>
    </div>
  );
}
