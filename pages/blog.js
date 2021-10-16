import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import Posts from '../components/Blog'

function Blog(props) {
  return (
    <>
      <Posts />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['blog', 'menu']))
  }
})

export default Blog
