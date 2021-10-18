import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Project from '../components/Projects'
const Projects = () => {
  return <Project />
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['projects', 'menu']))
  }
})
export default Projects
