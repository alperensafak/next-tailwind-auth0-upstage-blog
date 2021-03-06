import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Skillls from '../components/Skills'

const Skills = () => {
  return <Skillls />
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['menu', 'skills']))
  }
})

export default Skills
