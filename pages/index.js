import Hero from '../components/Hero'
import Header from '../components/Header'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'

function HomePage(props) {
  const router = useRouter()
  return (
    <>
      <Hero />
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'menu']))
  }
})
export default HomePage
