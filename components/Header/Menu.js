import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { MenuButton } from './MenuButton'

const Menu = () => {
  const { t } = useTranslation('menu')

  const [isOpen, setIsOpen] = useState()
  const router = useRouter()
  useEffect(() => {
    setIsOpen(false)
  }, [router])

  const menuVariants = {
    opened: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      y: '-100vh',
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const menuItemHover = {
    scale: 1.1
  }

  const menuItemTap = {
    scale: 0.9
  }

  const variants = {
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        stiffness: 1000
      }
    },
    closed: {
      y: 40,
      opacity: 0,
      transition: {
        stiffness: 1000
      }
    }
  }

  const menuButtonStyle = {
    cursor: 'pointer'
  }

  return (
    <>
      <MenuButton
        className=" absolute z-50 h-6 w-8 "
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        strokeWidth="2"
        lineProps={{ strokeLinecap: 'round' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={menuButtonStyle}
      />
      <motion.div
        className=" bg-yellow-300 h-screen w-screen fixed z-30 left-0 top-0 flex flex-col justify-center items-center  dark:bg-darkblue lg:text-8xl sm:text-6xl text-4xl "
        initial={false}
        variants={menuVariants}
        animate={isOpen ? 'opened' : 'closed'}
      >
        <Link href="/">
          <a>
            <motion.h1
              variants={variants}
              animate={isOpen ? 'opened' : 'closed'}
              whileHover={menuItemHover}
              whileTap={menuItemTap}
              className=" text-black hover:text-white font-title"
            >
              {t('nav1')}
            </motion.h1>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <motion.h1
              variants={variants}
              animate={isOpen ? 'opened' : 'closed'}
              whileHover={menuItemHover}
              whileTap={menuItemTap}
              className=" text-black hover:text-white font-title"
            >
              {t('nav2')}
            </motion.h1>
          </a>
        </Link>
        <Link href="/skills">
          <a>
            <motion.h1
              variants={variants}
              animate={isOpen ? 'opened' : 'closed'}
              whileHover={menuItemHover}
              whileTap={menuItemTap}
              className=" text-black hover:text-white font-title"
            >
              {t('nav3')}
            </motion.h1>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <motion.h1
              variants={variants}
              animate={isOpen ? 'opened' : 'closed'}
              whileHover={menuItemHover}
              whileTap={menuItemTap}
              className="text-black hover:text-white font-title"
            >
              {t('nav4')}
            </motion.h1>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <motion.h1
              variants={variants}
              animate={isOpen ? 'opened' : 'closed'}
              whileHover={menuItemHover}
              whileTap={menuItemTap}
              className="text-black hover:text-white font-title"
            >
              {t('nav5')}
            </motion.h1>
          </a>
        </Link>
        <Link href="/bookmarks">
          <a>
            <motion.h1
              variants={variants}
              animate={isOpen ? 'opened' : 'closed'}
              whileHover={menuItemHover}
              whileTap={menuItemTap}
              className="text-black hover:text-white font-title"
            >
              {t('nav6')}
            </motion.h1>
          </a>
        </Link>
      </motion.div>
    </>
  )
}

export default Menu
