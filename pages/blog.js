import React from 'react'
import Posts from '../components/blog'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Projects from './projects'

function Blog(props) {
  return (
    <>
      <Posts />
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['menu']))
  }
})

export default Blog
