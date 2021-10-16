import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectsNavbar from './ProjectsNavbar'
import { projects as projectsData } from './projects'
import { fadeInUp, routeFade, stagger } from './animation'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

export default function projects() {
  const { t } = useTranslation('about')
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('all')
  const [showDetail, setShowDetail] = useState(null)

  const handlerFilterCategory = (category) => {
    if (category === 'all') {
      setProjects(projectsData)
      setActive(category)
      return
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    )
    setProjects(newArray)
    setActive(category)
  }
  return (
    <>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <h1 className="  text-5xl  font-title font-bold text-black dark:text-white">
            <span className="relative inline-block  ">
              <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
              <span className="relative"> {t('title')}</span>
            </span>
          </h1>
        </div>
        <motion.div
          className="px-5 py-2 "
          style={{ height: '65vh' }}
          variants={routeFade}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ProjectsNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="relative grid grid-cols-12 gap-4 my-3"
          >
            {projects.map((project) => (
              <motion.div
                variants={fadeInUp}
                key={project.id}
                className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              >
                <ProjectCard
                  project={project}
                  setShowDetail={setShowDetail}
                  showDetail={showDetail}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
