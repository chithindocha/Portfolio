import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFlask,
  SiPython,
  SiTensorflow
} from "react-icons/si";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Culinary Cuisine",
      tech: [SiTensorflow, SiPython, SiFlask],
      link: "https://github.com/chithindocha/Culinary_Cuisine",
      cover: "/cuisine.png", // Replace with actual path to cover image
      background: "bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500",
    },
    {
      title: "Crophecy",
      tech: [SiExpress, FaReact, FaNodeJs, SiFlask, SiPython],
      link: "https://github.com/Crophecy",
      cover: "/crop.png", // Replace with actual path to cover image
      background: "bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500",
    },
  ];
  return (
    <div className="group py-10 p-5 sm:p-0 justify-center items-center text-center">
      <h2 className="font-bold text-3xl mb-8 title-bottom-line ">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
              
              <div className={cn("p-2 rounded-md", project.background)}>
                <DirectionAwareHover imageUrl={project.cover} className="w-full h-[20rem] space-y-5">
                    <div className="space-y-5">
                    <h1 className="text-left text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                        {project.tech.map((Icon, idx) => (
                            <Icon key={idx} className="w-8 h-8" />
                        ))}
                    </div>
                    </div>
                    
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
