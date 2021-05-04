import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'
const Menu = () => {
  const { t } = useTranslation('menu')
  const [isOpen, setIsOpen] = useState()
  const router = useRouter()
  useEffect(() => {
    setIsOpen(false)
  }, [router])

  const iconVariants = {
    opened: {
      rotate: 45,
      scale: 2
    },
    closed: {
      rotate: 0,
      scale: 2
    }
  }
  const menuVariants = {
    opened: {
      y: '0',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.5
      }
    },
    closed: {
      y: '-100vh',
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 0.3 }
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
        delay: 0.5,
        duration: 0.5,
        stiffness: 1000,
        velocity: -400
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

  return (
    <div className="">
      <motion.svg
        initial={false}
        variants={iconVariants}
        animate={isOpen ? 'opened' : 'closed'}
        onClick={() => setIsOpen((state) => !state)}
        className={cx(
          ' dark:text-purple-500 z-40 fixed top-10',
          isOpen ? 'text-white' : 'text-yellow-300'
        )}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
          fill="currentColor"
        />
      </motion.svg>
      <motion.div
        className=" bg-yellow-300 h-screen w-screen fixed z-30 left-0 top-0 flex flex-col justify-center items-center space-y-12 dark:bg-darkblue lg:text-8xl sm:text-6xl text-4xl "
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
        <motion.h1
          variants={variants}
          animate={isOpen ? 'opened' : 'closed'}
          whileHover={menuItemHover}
          whileTap={menuItemTap}
          className="text-black hover:text-white font-title"
        >
          {t('nav4')}
        </motion.h1>
        <motion.h1
          variants={variants}
          animate={isOpen ? 'opened' : 'closed'}
          whileHover={menuItemHover}
          whileTap={menuItemTap}
          className="text-black hover:text-white font-title"
        >
          {t('nav5')}
        </motion.h1>
      </motion.div>
    </div>
  )
}

export default Menu
