import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import Header from '../components/Header'
import React from 'react'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />

        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              y: 5,
              opacity: 0
            },
            pageAnimate: {
              y: 0,
              opacity: 1,
              transition: {
                ease: 'easeInOut',
                duration: 1
              }
            }
          }}
        >
          <main>
            <Component {...pageProps} />
          </main>
        </motion.div>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
