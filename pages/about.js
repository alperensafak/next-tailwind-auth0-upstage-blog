import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import cx from 'classnames'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Menu from '../components/Menu'
import Link from 'next/link'
function About(props) {
  const [checked, setChecked] = useState(false)
  const { t } = useTranslation('about')

  const menuopened = {
    y: 0,
    opacity: 1,

    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
  const menuclosed = {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }

  return (
    <div className="relative  w-full py-20 pb-20 overflow-hidden  md:pt-40 md:pb-64 dark:bg-darkbg">
      <div className="container relative flex flex-col justify-between items-start h-full max-w-6xl px-8 mx-auto xl:px-0 dark:bg-darkbg">
        <h2 className="relative flex items-center self-start inline-block w-auto mb-20 text-4xl font-title font-black">
          <span className="absolute inline-block w-full h-4 mt-3 -ml-2 bg-yellow-300 dark:bg-purple-500" />
          <span className="relative">{t('title')}</span>
        </h2>
        <div className="min-w-full flex items-center justify-around md:flex-col   border-2">
          <div>
            <h1 className="text-3xl font-bold ml-4">timeline example</h1>

            <div className="border-l-8 ml-10 border-red-400 flex flex-col">
              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">1000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">2000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">3000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">4000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">5000</span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold ml-4">timeline example</h1>

            <div className="border-l-8 ml-10 border-red-400 flex flex-col">
              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">1000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">2000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">3000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">4000</span>
              </div>

              <div className="h-32 flex items-center">
                <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
                <span className="pl-16">5000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common', 'menu']))
  }
})
export default About
