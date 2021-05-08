import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import React from 'react'
import AboutMe from '../components/About'

function About(props) {
  return (
    <>
      <AboutMe />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'menu']))
  }
})
export default About
