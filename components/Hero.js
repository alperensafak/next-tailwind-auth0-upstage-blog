import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { useTheme } from 'next-themes'
import { ThemeProvider } from 'next-themes'

import { useRouter } from 'next/router'

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

const Hero = (props) => {
  const { t } = useTranslation('common')
  const { theme, setTheme } = useTheme()

  return (
    <div className="">
      <div className="container h-screen mx-auto flex px-11 py-20  md:flex-row flex-col-reverse items-center dark:bg-darkbg">
        <div className="flex flex-col md:items-start md:text-left items-center text-center dark:bg-darkbg  ">
          <div>
            <h2 className=" relative top-5 md:top-0 text-4xl font-black leading-none text-center text-black lg:text-5xl xl:text-6xl md:text-left font-title dark:text-white">
              {t('h-1')} <WavingHand />
              <span className="relative inline-block w-auto   ml-2 ">
                <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
                <span className="relative"> Alperen</span>
              </span>
              ,
              <br /> {t('h-2')}
            </h2>

            <p className=" text-base text-center dark:text-darkp text-lightp xl:text-xl md:text-left">
              <br /> {t('p-1')}
            </p>
            <p className=" text-base text-center dark:text-darkp text-lightp xl:text-xl md:text-left">
              <br /> {t('p-2')}
            </p>
          </div>
          <div className="mt-4">
            <a href="#_" className="relative ">
              <span className="absolute -top-4 left-0 w-full h-14 mt-1 ml-1 bg-yellow-300 rounded dark:bg-darkblue"></span>
              <span className="relative inline-block w-48 h-full px-5 py-3 text-base font-bold bg-white border-2 border-black rounded fold-bold hover:bg-yellow-300 hover:text-white dark:hover:text-white dark:hover:bg-darkblue dark:text-black">
                Download CV :
              </span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          whileHover={{
            scale: 1.3
          }}
          transition={{
            type: 'spring'
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

export default Hero
