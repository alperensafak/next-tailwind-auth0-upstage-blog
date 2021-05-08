import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      location: '/skills/js.png'
    },
    {
      name: 'React',
      location: '/skills/react.png'
    },
    {
      name: 'NodeJs',
      location: '/skills/nodejs.png'
    },
    {
      name: 'ExpressJs',
      location: '/skills/expressjs.png'
    },
    {
      name: 'NextJs',
      location: '/skills/next.png'
    },
    {
      name: 'Angular',
      location: '/skills/angular.png'
    },
    {
      name: 'MongoDB',
      location: '/skills/mongodb.png'
    },
    {
      name: 'Redis',
      location: '/skills/Redis.png'
    },
    {
      name: 'Git',
      location: '/skills/git.png'
    },
    {
      name: 'Redux',
      location: '/skills/redux.png'
    },
    {
      name: 'Jest',
      location: '/skills/jest.png'
    },
    {
      name: 'MySql',
      location: '/skills/mysql.png'
    },
    {
      name: 'PostgreSQL',
      location: '/skills/postgresql.png'
    },
    {
      name: 'Framer Motion',
      location: '/skills/framer.png'
    },
    {
      name: 'tailwindCSS',
      location: '/skills/tailwind.png'
    },
    {
      name: 'HTML5',
      location: '/skills/html5.png'
    },
    {
      name: 'CSS3',
      location: '/skills/css3.png'
    },
    {
      name: 'Sass',
      location: '/skills/sass.png'
    },
    {
      name: 'Material UI',
      location: '/skills/material.png'
    },
    {
      name: 'Bootstrap',
      location: '/skills/bootstrap.png'
    },
    {
      name: 'Styled-Components',
      location: '/skills/styledcomponents.png'
    },
    {
      name: 'Figma',
      location: '/skills/figma.png'
    },
    {
      name: 'Photoshop',
      location: '/skills/photoshop.png'
    },
    {
      name: 'Illustrator',
      location: '/skills/illustrator.png'
    },
    {
      name: 'After Effects',
      location: '/skills/ae.png'
    },
    {
      name: 'AWS',
      location: '/skills/aws.png'
    },
    {
      name: 'Docker',
      location: '/skills/docker.png'
    },
    {
      name: 'Gatsby',
      location: '/skills/gatsby.png'
    },
    {
      name: 'Apollo',
      location: '/skills/apollo.png'
    },
    {
      name: 'GraphQL',
      location: '/skills/graphql.png'
    }
  ]
  const { t } = useTranslation('skills')
  return (
    <>
      <div className="container px-5 pt-14  mx-auto">
        <div className="flex flex-wrap  w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6">
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
      </div>

      <div className="wrap w-full h-screen overflow-hidden relative  text-center flex flex-row flex-wrap   ">
        <div className="list h-screen overflow-x-hidden sm:pt-10 pr-64 pb-64 fixed  ">
          {skills.map((item) => (
            <div className="item relative inline-block w-full w-48 h-48 m-7  shadow-lg  ">
              <motion.div
                whileHover={{
                  scale: 0.5
                }}
                className=" w-full h-full bg-white px-2 relative z-30 bg-center  "
              >
                <img
                  className="w-full h-full bg-cover relative z-30 bg-center  "
                  src={`${item.location}`}
                />
              </motion.div>
              <small className=" absolute  z-20 left-0 md:bottom-0 w-full text-center text-2xl text-color ">
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
