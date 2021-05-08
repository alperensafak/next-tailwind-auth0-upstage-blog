import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Projects from './projects'

function Blog(props) {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-8 mx-auto xl:px-0">
      <h2 className="relative flex items-center self-start inline-block w-auto mb-20 text-4xl font-black">
        <span className="absolute inline-block w-full h-4 mt-3 -ml-2 bg-yellow-300"></span>
        <span className="relative">Blog</span>
      </h2>
    </div>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['menu']))
  }
})

export default Blog
