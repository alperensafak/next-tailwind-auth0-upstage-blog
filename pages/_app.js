import '../styles/global.css'

import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'
import { appWithTranslation, useTranslation } from 'next-i18next'
import Header from '../components/Header'
import React from 'react'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              ease: 'easeInOut',
              duration: 1
            }
          }
        }}
      >
        <main className="h-full dark:bg-darkbg">
          <Component {...pageProps} />
        </main>
      </motion.div>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
