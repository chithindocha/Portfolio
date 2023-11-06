import React from 'react'
import './intro.css'
import btnImg from '../../assets/hireme.png'
import doodle from '../../assets/doodle.png'
import { Link } from'react-scroll'

const Intro = () => {
  return (
    <section className="intro" >
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm<span className="introName"> Chit</span> <br /> ML Developer </span>
            <p className="introPara">I am a skilled ML Developer with experience in creating <br />Accurate and very useful ML Models </p>
            <Link><button className="btn"><img src={btnImg} className="btnImg"alt="Hire Me" />Hire Me</button></Link>
        </div>
        <img src={doodle} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro