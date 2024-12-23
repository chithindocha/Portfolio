"use client";
import Link from "next/link";
import React from "react";
import ContactButton from "./ContactButton";
import { MovingButton } from "@/components/ui/moving-border";

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice To Meet You! <br />
          <span className="pt-0 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">
            {" "}
            {"I'm Chit."}{" "}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
        Designing intelligent solutions with machine learning and full-stack development, transforming ideas into impactful applications.
        </p>
        <div className="flex gap-5">
        <Link
          href={"mailto:chithindocha1393@gmail.com"}
          className=""
        >
          <ContactButton content="Contact Me"/>
        </Link>
        <Link
          href={"https://drive.google.com/file/d/1_oZvcnZvNggWFuFaOmda7kC5lvsP--aa/view?usp=drive_link"}
          className=""
        >
          <ContactButton content="Resume"/>
        </Link>
        </div>
        
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:left-10">
        <MovingButton borderRadius=".5rem" className="p-3 font-semibold">
          <p> Available for work</p>
        </MovingButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
