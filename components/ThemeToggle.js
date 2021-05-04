import React from 'react'

import { useTheme } from 'next-themes'
import cx from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home({ sound }) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="text-center">
      <Link href={''}>
        <button
          className={cx(
            'inline-flex w-12 h-6  rounded-full focus:outline-none transition-colors px-0.5 py-0.5 bg-yellow-300 dark:bg-darkblue  ',
            theme === 'dark' ? 'justify-end' : ''
          )}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
            sound()
          }}
        >
          <motion.span layout className=" w-5 h-5 bg-white rounded-full">
            {theme === 'dark' ? (
              <img
                className="object-cover object-center"
                src="/moon.svg"
                alt="moon"
              />
            ) : (
              <img
                className="object-cover object-center"
                src="/sun.svg"
                alt="sun"
              />
            )}
          </motion.span>
        </button>
      </Link>
    </div>
  )
}
