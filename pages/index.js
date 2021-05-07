import Hero from '../components/Hero/'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import React from 'react'

function HomePage() {
  return (
    <>
      <Hero />
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['hero', 'menu']))
  }
})
export default HomePage
