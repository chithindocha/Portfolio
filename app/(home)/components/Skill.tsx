"use client";

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect';

import { FaReact, FaNodeJs, } from "react-icons/fa";
import { SiMongodb, SiPython, SiGit , SiTensorflow, SiNumpy, SiOpencv, SiFlask, SiMysql } from "react-icons/si";


export default function Skill() {
  const skills = [
    {
      text: "Python",
      Icons: SiPython,
    },
    {
      text: "Tensorflow",
      Icons: SiTensorflow,
    },
    {
      text: "Numpy",
      Icons: SiNumpy,
    },
    {
      text: "OpenCV",
      Icons: SiOpencv,
    },
    {
      text: "Flask",
      Icons: SiFlask,
    },
    {
      text: "React",
      Icons: FaReact, 
    },
    {
      text: "MySQL",
      Icons: SiMysql,
    },
    {
      text: "Node.js",
      Icons: FaNodeJs,
    },
    {
      text: "Git",
      Icons: SiGit,
    },
  ];

  return (
    <section className="group mx-w-5xl mx-auto px-8 justify-center items-center text-center md: pt-10">
      <h2 className="font-bold text-3xl mb-8 title-bottom-line">Skills</h2>
      <div className="mx-auto max-w-[70%]">
        <HoverEffect items={skills} />
      </div>
    </section>
  );
}