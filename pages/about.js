import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import React from 'react'
import Abbout from '../components/About'

function About(props) {
  return (
    <>
      <Abbout />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'menu']))
  }
})
export default About
