import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import UIUX from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section className="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate ML Developer with experience in creating ML Models </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} className="skillBarImg" alt="UI Design" />
                <div className="skillBarText">
                    <h2>AIML</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={UIUX} alt="UI Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} className="skillBarImg"alt="UI Design" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>THIS IS DEMO TEXT</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills