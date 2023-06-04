import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col justify-center lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's degree in computer science"
            subTitle="Université des sciences et technologies Mohamed Boudiaf USTO (2020 - 2023), Oran"
            result="16,47/20"
          />
          <ResumeCard
            title="high school baccalaureate experimental science"
            subTitle="Lycée Maustapha Haddam (2020), Oran les castors"
          />
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
}

export default Education