import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import Posts from '../components/Blog'
import { getAllNodes } from 'next-mdx/server'

function Blog({ posts }) {
  return (
    <>
      <Posts posts={posts} />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    posts: await getAllNodes('post'),
    ...(await serverSideTranslations(locale, ['blog', 'menu']))
  }
})

export default Blog
