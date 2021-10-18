import React from 'react'

import { motion } from 'framer-motion'

const Bookmarks = () => {
  return (
    <>
      <div className="container px-5 pt-14  mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 className="  text-5xl  font-title font-bold text-black dark:text-white">
              <span className="relative inline-block  ">
                <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
                <span className="relative"> Bookmarks</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookmarks
