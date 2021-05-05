import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block'
    }}
    animate={{ rotate: 20 }}
    transition={{
      yoyo: Infinity,
      from: 0,
      duration: 0.2,
      ease: 'easeInOut',
      type: 'tween'
    }}
  >
    👋
  </motion.div>
)
const Projects = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="container mx-auto  flex px-5 py-24 md:flex-row flex-col-reverse items-center md:pt-48    ">
      <div className="lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center border-2">
        <h1 className=" lg:text-5xl xl:text-6xl md:text-4xl text-3xl mb-4 font-title font-bold text-black dark:text-white">
          Hi <WavingHand /> I'm{' '}
          <span className="relative inline-block  ">
            <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
            <span className="relative"> Alperen</span>
          </span>
          ,
          <br className=" inline-block" />
          Web Developer
        </h1>
        <p className="xl:text-xl  mb-8 leading-relaxed text-lightp  dark:text-darkp">
          I am computer engineering student based in İzmir. I'm interested in
          JavaScript technologies. I'm a fast learner, able to pick up new
          skills. I want to improve myself on front-end and back-end. My career
          objective is to become a full stack web developer.
          <br className=" inline-block" />I prefer modern and new technologies
          instead of old technologies
        </p>

        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Button
          </button>
        </div>

        <div className="mt-8">
          <a href="#_" className="relative ">
            <span className="absolute -top-4 left-0 w-full h-14 mt-1 ml-1 bg-yellow-300 rounded dark:bg-darkblue"></span>
            <span className="relative inline-block w-48 h-full px-5 py-3 text-base font-bold bg-white border-2 border-black rounded fold-bold hover:bg-yellow-300 hover:text-white dark:hover:text-white dark:hover:bg-darkblue dark:text-black">
              Download CV :
            </span>
          </a>
        </div>
      </div>

      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-4">
        <motion.div
          animate={{ y: -20 }}
          transition={{
            yoyo: Infinity,
            from: 0,
            duration: 0.8,
            ease: 'easeInOut',
            type: 'tween'
          }}
          className="max-w-lg w-full "
        >
          {theme === 'dark' ? (
            <img
              className="  object-cover object-center"
              src="/heroimgdark.svg"
              alt="heroimgdark"
            />
          ) : (
            <img
              className="object-cover object-center"
              src="/heroimg.svg"
              alt="heroimg"
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
