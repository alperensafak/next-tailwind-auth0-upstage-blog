import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Projects from './projects'

const Bookmarks = () => {
  return <div></div>
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['menu']))
  }
})

export default Bookmarks
