import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

const About = () => {
  const { t } = useTranslation('about')
  return (
    <section>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 className="  text-5xl  font-title font-bold text-black dark:text-white">
              <span className="relative inline-block  ">
                <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
                <span className="relative"> {t('title')}</span>
              </span>
            </h1>
          </div>
          <p className="lg:w-1/2 w-full text-xl  mb-8  text-color">
            {t('aboutme')}
          </p>

          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 sm:mt-8 ">
            <h1 className="text-title font-medium mt-8 mb-12 ">
              {t('education')}
            </h1>

            <div className="flex relative pt-10 pb-20 sm:items-center md:w-8/9  ">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center ">
                <div className="line"></div>
              </div>
              <div className="dot" />

              <div className="flex-grow md:pl-8 pl-6 flex  items-start flex-col sm:flex-row  ">
                <div className="flex-shrink-0 w-40 h-40 inline-flex items-center justify-center ">
                  <motion.img
                    whileHover={{
                      scale: 1.3
                    }}
                    className="  object-scale-down h-full  "
                    src="/about/deu.png"
                    alt="deu"
                  />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-bold leading-relaxed  text-xl dark:text-white">
                    {t('university')}
                  </h2>
                  <p className="font-semibold text-color">{t('department')} </p>
                  <p className="text-color">2013 </p>
                </div>
              </div>
            </div>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-8/9  ">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center ">
                <div className="line"></div>
              </div>
              <div className="dot" />

              <div className="flex-grow md:pl-8 pl-6 flex  items-start flex-col sm:flex-row  ">
                <div className="flex-shrink-0 w-40 h-40 inline-flex items-center justify-center ">
                  <motion.img
                    whileHover={{
                      scale: 1.3
                    }}
                    className="  object-scale-down h-full  "
                    src="/about/kal3.png"
                    alt="kal"
                  />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-bold leading-relaxed  text-xl dark:text-white">
                    {t('highschool')}
                  </h2>

                  <p className="text-color">2008 - 2012 </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 mt-8 ">
            <h1 className="text-title mt-8 mb-12 ">{t('experience')}</h1>

            <div className="flex relative pt-10 pb-20 sm:items-center md:w-8/9 ">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center ">
                <div className="line"></div>
              </div>
              <div className="dot" />

              <div className="flex-grow  md:pl-8 pl-6 flex  items-start flex-col sm:flex-row  ">
                <div className=" flex-shrink-0 w-40 h-40 inline-flex items-center justify-center ">
                  <motion.img
                    whileHover={{ scale: 1.3 }}
                    className="  object-scale-down h-full   "
                    src="/about/dhmi.png"
                    alt="dhmi"
                  />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-bold leading-relaxed  text-xl dark:text-white">
                    {t('experience-3')}
                  </h2>
                  <p className="font-semibold text-color">{t('corp-3')}</p>
                  <p className="text-color">{t('department-3')}</p>
                  <p className="text-color">{t('date-3')}</p>
                  <p className="text-color">{t('location-3')}</p>
                </div>
              </div>
            </div>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-8/9 ">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center ">
                <div className="line"></div>
              </div>
              <div className="dot" />

              <div className="flex-grow md:pl-8 pl-6 flex  items-start flex-col sm:flex-row  ">
                <div className="flex-shrink-0 w-40 h-40 inline-flex items-center justify-center ">
                  <motion.img
                    whileHover={{
                      scale: 1.3
                    }}
                    className="  object-scale-down h-full  "
                    src="/about/ieee.png"
                    alt="ieee"
                  />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-bold leading-relaxed  text-xl dark:text-white">
                    {t('experience-2')}{' '}
                  </h2>
                  <p className="font-semibold text-color">{t('corp-2')}</p>
                  <p className="text-color">{t('date-2')}</p>
                  <p className="text-color">{t('location-2')}</p>
                </div>
              </div>
            </div>

            <div className="flex relative pt-10 pb-20 sm:items-center md:w-8/9 ">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center ">
                <div className="line"></div>
              </div>
              <div className="dot" />

              <div className="flex-grow md:pl-8 pl-6 flex  items-start flex-col sm:flex-row  ">
                <div className="flex-shrink-0 w-40 h-40 inline-flex items-center justify-center ">
                  <motion.img
                    whileHover={{
                      scale: 1.3
                    }}
                    className="  object-scale-down h-full  "
                    src="/about/jacksons.png"
                    alt="jacksons"
                  />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-bold leading-relaxed  text-xl dark:text-white">
                    {t('experience-1')}
                  </h2>
                  <p className="font-semibold text-color">{t('corp-1')}</p>
                  <p className="text-color">{t('date-1')}</p>
                  <p className="text-color">{t('location-1')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
