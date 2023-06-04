import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex justify-center gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Vendeur Magasin de décoration et de meubles"
            subTitle="Mostaganem - (07/2022 - 10/2022)"
            result="ALG"
            des="Accompagnement des clients dans leurs achats, remise de conseils personnalisés, présentation de produits correspondant à leurs critères de recherche."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
