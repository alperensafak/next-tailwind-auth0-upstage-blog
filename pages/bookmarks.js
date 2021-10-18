import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Bookmark from '../components/Bookmarks'

const Bookmarks = () => {
  return (
    <>
      <Bookmark />
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['menu']))
  }
})

export default Bookmarks
