import React from 'react'
import { useTheme } from 'next-themes'
import cx from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home({ sound }) {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Link href={''}>
        <button
          className={cx('switch  ', theme === 'dark' ? 'justify-end' : '')}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
            sound()
          }}
        >
          <motion.span layout className=" switch-image">
            {theme === 'dark' ? (
              <img
                className="object-cover object-center"
                src="/switch/moon.svg"
                alt="moon"
              />
            ) : (
              <img
                className="object-cover object-center"
                src="/switch/sun.svg"
                alt="sun"
              />
            )}
          </motion.span>
        </button>
      </Link>
    </>
  )
}
