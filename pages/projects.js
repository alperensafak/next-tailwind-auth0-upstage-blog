import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Projects = () => {
  return <div></div>
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['menu']))
  }
})
export default Projects
