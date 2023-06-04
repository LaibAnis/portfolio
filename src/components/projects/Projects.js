import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Online Booking Platform With Doctor"
          des="A platform that allows you to make an appointment with a doctor or a medical establishment with medical file management"
          src={projectOne}
          git="https://github.com/LaibAnis/pfe"
        />
        <ProjectsCard
          title="Descktop Application for Hosting and Broadcasting Podcasts (java/api swing /mysql)"
          des=" A platform that allows you to post podcasts as it allows you to browse the podcasts of other users with the possibility of giving your opinion"
          src={projectTwo}
          git='https://github.com/LaibAnis/platforme-hosting-podcast.git'
        />
        <ProjectsCard
          title="Compiler Of a Programming Language Called SNAIL"
          des="Realization of a mini-compiler of an unreal programming language named snail based on lexical and syntactic, semantic (java) analysis algorithms"
          src={projectThree}
          git='https://github.com/LaibAnis/Sanil-compiler.git'
        />

         <ProjectsCard
          title="Modeling of the medical records of a medical establishment using XML"
          des="Modeling medical records by creating an XML file with its DTD and XSD, then exploiting this file using XPATH, XQUERY, SAX, DOM"
          src={projectFour}
          git='https://github.com/LaibAnis/Medical-XML/tree/main/projetdss_laib_anis_si_G1'
        />
      </div>
    </section>
  );
}

export default Projects