import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { skills } from './SkillList'

const Skills = () => {
  const { t } = useTranslation('skills')
  return (
    <>
      <div className="container px-5 pt-6 sm:pt-12  mx-auto">
        <div className="flex flex-wrap w-full mb-8 sm:mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 className="  text-5xl  font-title font-bold text-black dark:text-white">
              <span className="relative inline-block  ">
                <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
                <span className="relative"> {t('title')}</span>
              </span>
            </h1>
          </div>

          <p className="lg:w-1/2 w-full text-xl  mb-8  text-color">
            {t('about')}
          </p>
        </div>
        <div className="    items-center text-center ">
          {skills.map((item, index) => (
            <div
              key={index}
              className=" relative inline-block  w-36 h-36  mx-2 my-5  md:m-7 shadow-lg"
            >
              <motion.div
                whileHover={{
                  scale: 0.5
                }}
                className=" w-full h-full bg-white px-2 relative z-30 bg-center rounded-2xl  "
              >
                <img
                  className="w-full h-full bg-cover p-2 relative z-30 bg-center rounded-lg skew-y-12 "
                  src={`${item.location}`}
                />
              </motion.div>
              <small className=" absolute  z-20 left-0 md:bottom-0 w-full text-center text-lg text-color ">
                {item.name}
              </small>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
