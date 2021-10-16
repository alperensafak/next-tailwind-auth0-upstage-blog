import React from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

const Blog = () => {
  const { t } = useTranslation('blog')
  return (
    <section>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <h1 className="  text-5xl  font-title font-bold text-black dark:text-white">
            <span className="relative inline-block  ">
              <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
              <span className="relative"> {t('title')}</span>
            </span>
          </h1>
        </div>
        <p1>sa</p1>
      </div>
    </section>
  )
}

export default Blog
